class StudentsController < Sinatra::Base
set :default_content_type, "application/json"
  
before do
      headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
    end
        get'/students' do
            student = Student.all
            student.to_json
          
      end

      get '/students/:id' do
            student = Student.find(params[:id])
        
            # include associated reviews in the JSON response
            student.to_json(include: :courses)
          end

          get '/students/:name/courses' do
            student = Student.find_by(name: params[:name])
            
            if student
              student.courses.to_json
            else
              { error: "Student not found" }.to_json
            end
          end
          

          post '/students' do
            student = Student.create(
              name: params[:name],
              email: params[:email],
              password: params[:password],
              
            )
            student.to_json
          end
  
end