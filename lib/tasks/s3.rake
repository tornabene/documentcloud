namespace :storage do

  task :start do
  	key = 'YKWJ5ELKLKSYW0LTASS1'
  	secret = 'eySURpJdtXklmKqa4wmhViQghqWbmEsuRI2twg=='

	s3 = RightAws::S3.new(key, secret , {:server => 's3.ipublic.org' ,:protocol => 'http', :port => 8080 })
	bucket1 = s3.bucket('staging222',true)
 	bucket1.keys 
 end
end