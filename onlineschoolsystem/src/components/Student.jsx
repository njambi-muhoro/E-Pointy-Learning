import React from "react";

function Student(props) {
  const { favoriteCourses } = props;
  console.log(favoriteCourses)
  return (
    <div>
      <h1>My Favorite Courses</h1>
      <ul>
        {favoriteCourses.map((course) => (
          <li key={course.id}>
            {course.title} - {course.subtopic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Student;
