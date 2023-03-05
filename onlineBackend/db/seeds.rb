# Create some courses
teachers = []
5.times do |i|
  teacher = Teacher.create(name: "Teacher #{i+1}", email: "teacher#{i+1}@example.com", password: 'password')
  teachers << teacher
end

# Creating students
students = []
10.times do |i|
  student = Student.create(name: "Student #{i+1}", email: "student#{i+1}@example.com", password: 'password')
  students << student
end

# Creating courses
courses = []
10.times do |i|
  teacher = teachers.sample
  course = Course.create(title: "Course #{i+1}", videos_link: "https://www.youtube.com/playlist?list=PL0-GT3co4r2y2YErbmuJw2L5tW4Ew2O5B", teachersname: teacher.name, description: "Course #{i+1} description", subtopic: "Subtopic #{i+1}", teacher_id: teacher.id)
  courses << course
end

# Adding students to courses
courses.each do |course|
  students.sample(5).each do |student|
    course.student_id = student.id
    course.save
  end
end
  
  puts "Done seeding!"