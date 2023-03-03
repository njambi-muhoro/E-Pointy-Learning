import React, { useState } from "react";
import FetchCourses from "./FetchCourses";
import Student from "./Student";
import Time from "./Time";

function Courses() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelect = (course) => {
    setSelectedCourses((prevSelectedCourses) => [...prevSelectedCourses, course]);
  };

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        backgroundColor: "rgb(242,241,249)",
        border: "9px solid black",
        borderRadius: "10px"
      }}
    >
      <div style={{ display: "flex", gap: "50px" }}>
        <Time />
        <h1 style={{ fontSize: "30px" }}>SUBJECTS</h1>
      </div>
      <FetchCourses onCourseSelect={handleCourseSelect} />
      <Student courses={selectedCourses} />
    </div>
  );
}

export default Courses;
