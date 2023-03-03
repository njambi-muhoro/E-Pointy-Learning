class CoursesController < Sinatra::Base
  set :default_content_type, "application/json"
  before do
    headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
  end

  get'/courses' do
    message = Course.all.order(created_at: :asc)
    message.to_json
  end
  
  post'/courses' do
    course = Course.create(title: params[:title], videos_link: params[:videos_link], subtopic: params[:subtopic], teachersname: params[:teachersname], description: params[:description])
    course.to_json
  end
  
end