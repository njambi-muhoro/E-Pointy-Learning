class TeacherssController < Sinatra::Base
    set :default_content_type, "application/json"
    before do
        headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
      end
            get'/teachers' do
                teacher = Teacher.all
                teacher.to_json
              
          end

          get '/teachers/:id' do
            teacher = Teacher.find(params[:id])
        
            # include associated reviews in the JSON response
            teacher.to_json(only: [:id, :name], include: {
              courses: { only: [:title, :videos_link], include: {
                student: { only: [:name] }
              } }
            })
          end

          post '/teachers' do
            teacher = Teacher.create(
              name: params[:name],
              email: params[:email],
              password: params[:password],
              
            )
            teacher.to_json
          end

      
    end