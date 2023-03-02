import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic based on userType, email, and password
    // Assuming successful login, set loggedIn state to true
    setLoggedIn(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
    if (loggedIn && userType === "teacher") {
      navigate("/teacher");
    } else if (loggedIn && userType === "student") {
      navigate(`/student/${name}`);
    }
  };

  return (
    <div>
      <div>
        <h1>Welcome, To Pointy E-Learning!</h1>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid red",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label style={{ marginRight: "10px" }}>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {userType === "student" && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label style={{ marginRight: "10px" }}>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label style={{ marginRight: "10px" }}>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label style={{ marginRight: "10px" }}>
              Login As:
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                style={{ marginLeft: "5px" }}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </label>
            <button type="submit" style={{ marginLeft: "5px" }}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
