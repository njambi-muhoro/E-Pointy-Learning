import NavBar from "./components/Navbar";
import Student from "./components/Student";
import Teachers from "./components/Teacher";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import { useState, useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [favoriteCourses, setFavoriteCourses] = useState([]);

  // Save the favorite courses to localStorage when the state changes
  useEffect(() => {
    localStorage.setItem("favoriteCourses", JSON.stringify(favoriteCourses));
  }, [favoriteCourses]);

  // Retrieve the favorite courses from localStorage when the component mounts
  useEffect(() => {
    const savedFavoriteCourses = localStorage.getItem("favoriteCourses");
    if (savedFavoriteCourses) {
      setFavoriteCourses(JSON.parse(savedFavoriteCourses));
    }
  }, []);

  const handleCourseFavorite = (course) => {
    if (favoriteCourses.includes(course)) {
      // Remove course from favorites
      const updatedFavorites = favoriteCourses.filter((c) => c !== course);
      setFavoriteCourses(updatedFavorites);
    } else {
      // Add course to favorites
      const updatedFavorites = [...favoriteCourses, course];
      setFavoriteCourses(updatedFavorites);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses  onCourseFavorite={handleCourseFavorite}/>} />

        <Route path="/students" element={<Student favoriteCourses={favoriteCourses}/>} />

        <Route path="/teachers" element={<Teachers />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {/* <FetchCourses likedCourses={likedCourses} addCourse={addCourse} /> */}
      
    </div>
  );
}

export default App;
