# Create some courses
Course.create(title: "Mathematics for Beginners", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
    subtopic: "Algebra", 
    teachersname: "John Doe", 
    description: "This course is an introduction to algebra, covering basic concepts and problem-solving techniques.")

Course.create(title: "Introduction to Programming", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
    subtopic: "Python", 
    teachersname: "Jane Smith", 
    description: "This course provides an overview of computer programming using Python, covering variables, loops, functions, and other fundamental concepts.")

Course.create(title: "English Literature", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
    subtopic: "Shakespeare", 
    teachersname: "Mark Johnson", 
    description: "This course explores the works of William Shakespeare, including his plays and sonnets, and provides insights into his writing style and historical context.")

    # Seed file to create students

# Create 3 students with name, email, and password
student1 = Student.create!(
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password1"
  )
  
  student2 = Student.create!(
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password2"
  )
  
  student3 = Student.create!(
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "password3"
  )
  
teacher1 = Teacher.create(name: "John Doe", password: "password1", email: "john.doe@example.com")
teacher2 = Teacher.create(name: "Jane Smith", password: "password2", email: "jane.smith@example.com")
teacher3 = Teacher.create(name: "Bob Johnson", password: "password3", email: "bob.johnson@example.com")

User.create!(teacher_id: teacher1)
User.create!(student_id: student1)
User.create!(teacher_id: teacher2)
User.create!(student_id: student2)


  
  puts "Done seeding!"