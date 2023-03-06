README
# Description
This is a RESTful API for a course management system. The API allows users to create, read, update, and delete courses, students, teachers, and users.

### Installation
To install the application, please follow these steps:

Clone the repository to your local machine.
Run bundle install to install all required dependencies.
Run rake db:migrate to migrate the database schema.
Start the server with rackup.


 ## Usage
### API Endpoints
The following API endpoints are available:

Courses
GET /courses
Returns a list of all courses.

POST /courses
Creates a new course.

GET /courses/:id
Returns the details of a specific course.

POST /courses/:id
Updates the details of a specific course.

Students
GET /students
Returns a list of all students.

GET /students/:id
Returns the details of a specific student.

GET /students/:name/courses
Returns a list of courses for a specific student.

POST /students
Creates a new student.

Teachers
GET /teachers
Returns a list of all teachers.

GET /teachers/:id
Returns the details of a specific teacher.

POST /teachers
Creates a new teacher.

Users
GET /users
Returns a list of all users.

POST /users
Creates a new user.

#### Example Requests
Create a new course
json
Copy code
{
  "name": "Math 101",
  "teacher_id": 1,
  "student_ids": [1, 2, 3]
}
## React-based E-learning Platform
This project is a course management system built with React and Sinatra, where students can view their enrolled courses and teachers can add new courses to the system.

### Installation and Setup
Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/njambi-muhoro/E-Pointy-Learning.git
Change into the project directory.
bash
Copy code
cd course-management-system
Install the required dependencies.
Copy code
npm install
Start the React development server.
sql
Copy code
npm start
In a new terminal window, start the Sinatra server.
Copy code
ruby app.rb
Open the application in your browser at http://localhost:3001.
Usage
#### As a student
Log in with your name on the homepage.

You will be redirected to a page showing your enrolled courses.

#### As a teacher
Log in with your name on the homepage.

You will be redirected to a page where you can add a new course to the system.

Fill out the form and click "Submit".

Your new course will be added to the system and displayed on the homepage for all students to see.

### Contributing
Contributions are welcome. To contribute, please fork the repository, create a new branch, and submit a pull request.

License
This project is licensed under the MIT License.