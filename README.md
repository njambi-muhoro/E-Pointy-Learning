README
#### Description
This is a RESTful API for a course management system. The API allows users to create, read, update, and delete courses, students, teachers, and users.

### Installation
To install the application, please follow these steps:

Clone the repository to your local machine.
Run bundle install to install all required dependencies.
Run rake db:migrate to migrate the database schema.
Start the server with rackup.
Usage


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

Example Requests
Create a new course
json
Copy code
{
  "name": "Math 101",
  "teacher_id": 1,
  "student_ids": [1, 2, 3]
}
## React-based E-learning Platform
Pointy is a React-based E-learning platform designed to provide online courses to students on various topics. Users can log in or sign up to the platform as students or teachers.

### Components
The following components are used in the application:

NavBar: renders a navigation bar with links to different pages and a dropdown to select the user type. It also handles the logout functionality.
Student: displays a list of favorite courses of a student.
Teacher: displays a list of courses being taught by a teacher.
Courses: displays a list of courses available on the platform. Students can mark courses as favorites, which is saved in the local storage.
Home: displays the home page of the application.
Login: provides a form for the user to log in with their email and password.
SignUp: provides a form for the user to sign up with their email, password, and name.

### State Management
The following hooks are used for state management:

useState: to manage state variables userType, email, password, name, loggedIn.
useEffect: to save and retrieve the list of favorite courses to/from the local storage.
useNavigate: to programmatically navigate to a different page.
Routes
The Routes component is used to define the different pages of the application:

/: renders the Home component.
/courses: renders the Courses component.
/students: renders the Student component.
/teachers: renders the Teacher component.
/login: renders the Login component.
/signup: renders the SignUp component.
The Route component is used to map the URL path to a specific component.

### Other Features
The NavBar component also includes a dropdown menu that allows the user to select their user type (i.e., "student" or "teacher"). Based on the selected user type and the `loggedIn
