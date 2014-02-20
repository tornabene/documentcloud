class ImportController < ApplicationController

  FILE_URL = /\Afile:\/\//

  layout nil

  skip_before_action :verify_authenticity_token, :only => [:cloud_crowd, :update_access]

  before_action :login_required, :only => [:upload_document]

  # Internal document upload, called from the workspace.
  def upload_document
    return json(nil, 409) unless params[:file]
    @document = Document.upload(params, current_account, current_organization)
    @project_id = params[:project]
    if params[:multi_file_upload]
      json @document
    else
      # Render the HTML/script...
    end
  end

  # Returning a "201 Created" ack tells CloudCrowd to clean up the job.
  # If the document failed to import, we remove it.
  def cloud_crowd
    job = JSON.parse(params[:job])
    if job['status'] != 'succeeded'
      logger.error("Document import failed: " + job.inspect)
      record = ProcessingJob.find_by_cloud_crowd_id(job['id'])
      record.document.update_attributes(:access => DC::Access::ERROR) if record && record.document
    end
    ProcessingJob.destroy_all(:cloud_crowd_id => job['id'])
    #render :text => '201 Created', :status => 201
    render :text => "Created but don't clean up the job right now."
  end

  # CloudCrowd is done changing the document's asset access levels.
  # 201 created cleans up the job.
  def update_access
    render :text => '201 Created', :status => 201
  end

end
