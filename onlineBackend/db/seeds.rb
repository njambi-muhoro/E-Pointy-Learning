# Create some courses
Course.create(title: "Mathematics for Beginners", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
    
    teachersname: "John Doe", 
    subtopic: "Algebra", 
    description: "This course is an introduction to algebra, covering basic concepts and problem-solving techniques.")

Course.create(title: "Introduction to Programming", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
   
    teachersname: "Jane Smith", 
     subtopic: "Python", 
    description: "This course provides an overview of computer programming using Python, covering variables, loops, functions, and other fundamental concepts.")

Course.create(title: "English Literature", 
    videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", 
   
    teachersname: "Mark Johnson", 
     subtopic: "Shakespeare", 
    description: "This course explores the works of William Shakespeare, including his plays and sonnets, and provides insights into his writing style and historical context.")

    # Create some teachers
Teacher.create(name: "John Doe", email: "john.doe@example.com", password: "password")
Teacher.create(name: "Jane Smith", email: "jane.smith@example.com", password: "password")

# Create some students
Student.create(name: "Alice Johnson", email: "alice.johnson@example.com", password: "password")
Student.create(name: "Bob Thompson", email: "bob.thompson@example.com", password: "password")
Student.create(name: "Charlie Brown", email: "charlie.brown@example.com", password: "password")
  
  puts "Done seeding!"