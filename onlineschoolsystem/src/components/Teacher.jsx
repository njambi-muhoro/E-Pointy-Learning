import React, { useState } from "react";

function Teacher() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [description, setDescription] = useState("");
  const [videos_link, setVideoLink] = useState("");
  const [subtopic, setSubtopic] = useState("");
  const [teacherName, setTeacherName] = useState("");

  const handleSelectedCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubtopicChange = (e) => {
    setSubtopic(e.target.value);
  };

  const handleTeacherNameChange = (e) => {
    setTeacherName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      course: selectedCourse,
      description: description,
      videos_link: videos_link,
      subtopic: subtopic,
      teachersname: teacherName,
    };

    fetch("http://localhost:9292/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setSelectedCourse("");
    setDescription("");
    setVideoLink("");
    setSubtopic("");
    setTeacherName("");
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Add a New Course</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectedCourse">Select Course:</label>
          <select
            className="form-control"
            id="selectedCourse"
            value={selectedCourse}
            onChange={handleSelectedCourseChange}
          >
            <option value="">Select a course</option>
            <option value="Math">Math</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
            <option value="Biology">Biology</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="videoLink">Video Link:</label>
          <input
            type="text"
            className="form-control"
            id="videoLink"
            value={videos_link}
            onChange={handleVideoLinkChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subtopic">Subtopic:</label>
          <input
            type="text"
            className="form-control"
            id="subtopic"
            value={subtopic}
            onChange={handleSubtopicChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teacherName">Teacher's Name:</label>
          <input
            type="text"
            className="form-control"
            id="teacherName"
            value={teacherName}
            onChange={handleTeacherNameChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
                    submit
                    </button>
          </form>
        </div>
     
  );
}

export default Teacher;
