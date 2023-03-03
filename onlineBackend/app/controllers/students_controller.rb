class StudentsController < Sinatra::Base
set :default_content_type, "application/json"
  
before do
      headers 'Access-Control-Allow-Origin' => 'http://localhost:3001'
    end
        get'/students' do
            student = Student.all
            student.to_json
          
      end
  
end