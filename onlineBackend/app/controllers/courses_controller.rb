class CoursesController < Sinatra::Base
  set :default_content_type, "application/json"
  before do
    headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
  end

  get'/courses' do
    course = Course.all.order(created_at: :asc)
    course.to_json
  end

  
  
  post'/courses' do
    course = Course.create(title: params[:title], videos_link: params[:videos_link], subtopic: params[:subtopic], teachersname: params[:teachersname], description: params[:description])
    course.to_json
  end

  get '/courses/:id' do
    course = Course.find(params[:id])
    # send a JSON-formatted response of the game data
    course.to_json
  end


  
  post '/courses/:id' do
    course = Course.find(params[:id])
    student_name = params[:studentName]
  
    # Do something with the student name and course object
  
    course.to_json
  end
  

  
end