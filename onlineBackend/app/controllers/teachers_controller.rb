class TeacherssController < Sinatra::Base
    set :default_content_type, "application/json"
    before do
        headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
      end
            get'/teachers' do
                teacher = Teacher.all
                teacher.to_json
              
          end
      
    end