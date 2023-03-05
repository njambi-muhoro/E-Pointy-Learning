import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Student() {
  const location = useLocation();
  const name = location.state?.name;
  const [courses, setCourses] = useState([]);
  console.log(name);

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:9292/students/${name}/courses`)
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error(error));
    }
  }, [name]);

  console.log(courses);
  if (!name) {
    return <div>Error: Please log in first</div>;
  }

  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <h2>Your courses:</h2>
      {courses.map((course) => (
        <div>
          <div key={course.id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <div className="card">
              <div className="card-image">
                <div className="category">Video LInk:{course.videos_link}</div>
              </div>

              <div className="heading video-wrapper">
                {course.title} - {course.subtopic}
                <div className="author card-body">
                  By <span className="name">{course.teachersname} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Student;
