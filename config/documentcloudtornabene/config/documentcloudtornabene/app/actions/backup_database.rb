require File.dirname(__FILE__) + '/support/setup'

class BackupDatabase < CloudCrowd::Action

  def process
    begin
      config    = Rails.configuration.database_configuration[ Rails.env ]
      @host     = config['host'] ? "-h #{config['host']}" : ''
      @username = config['username']
      @pass     = config['password']
      Dir.mktmpdir do |temp_dir|
        @temp_dir = temp_dir
        backup DC::MAIN_DB['database']
        backup DC::ANALYTICS_DB['database']
      end
    rescue Exception => e
      LifecycleMailer.exception_notification(e).deliver
      raise e
    end
    true
  end


  private

  def backup(db_name)
    dump = File.join(@temp_dir, "#{db_name}.dump")
    system "PGPASSWORD=\"#{@pass}\" pg_dump -U #{@username} #{@host} -Fc #{db_name} > #{dump}"
    DC::Store::AssetStore.new.save_database_backup(db_name, dump)
  end

end
