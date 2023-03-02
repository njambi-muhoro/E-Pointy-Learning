import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ isLoggedIn, onLogout }) {
  const [userType, setUserType] = useState("");

  const handleLogout = () => {
    setUserType("");
    onLogout();
  };
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div
        className="container-fluid top-bar theme-bg-primary-darken justify-content-between"
        id="navSectionDive"
        style={{ border: "1px solid red" }}
      >
        <nav
          className="navbar navbar-expand-lg navbar-dark position-relative"
          id="navsecondDiv"
        >
          <div id="pointy">
            <li className="list-inline-item ">
              <i
                className="fa-solid fa-chalkboard-user"
                style={{ fontSize: "2em", color: "white" }}
              ></i>
            </li>
            <h2 style={{ color: "white" }}>Pointy E-learning</h2>
          </div>

          <div
            className="sliderLists "
            id="linkDiv"
            style={{
              border: "2px solid green",
              width: "600px",
              height: "73px",
            }}
          >
            <div className="nav-item me-lg-4" id="linkstyling">
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </div>

            <div className="nav-item me-lg-4" id="linkstyling">
              <Link style={{ color: "white" }} to="/courses">
                Courses
              </Link>
            </div>

            
              <div className="nav-item me-lg-4">
                <Link style={{ color: "white" }} to="/students">
                  Student
                </Link>
              </div>
          

            
              <div className="nav-item me-lg-4">
                <Link style={{ color: "white" }} to="/teachers">
                  Teachers
                </Link>
              </div>
           

            <div className="nav-item me-lg-4">
              <Link to="/login" style={{ color: "white" }}>
                Login
              </Link>
            </div>

            {/* select dropdown to allow users to select their user type (i.e., "student" or "teacher").
          Based on the selected user type and the isLoggedIn state, we render different links for
          students and teachers. If the user is not logged in, we render a "Login" link. If the user
          is logged in, we render a "Logout" button that calls the handleLogout function when clicked */}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;
