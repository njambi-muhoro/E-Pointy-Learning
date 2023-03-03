


class UsersController < Sinatra::Base
  set :default_content_type, "application/json"

 

 
  
  configure do
    enable :cross_origin
  end
  
  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
  end
  
  options '*' do
    response.headers['Allow'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token'
    200
  end


  get "/users" do
    user = User.all
    user.to_json
  end

  post "/users" do
    user = User.create(teacher_id: params[:teacher_id], student_id: params[:student_id])
    user.to_json
  end

end
