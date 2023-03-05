import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

 

  const handleLogin = () => {
    // the fetch request will return only users that match all three parameters,
    //  and the matchingUsers variable will be an array of users that match. The 
    //  if statement will check if there are any matching users, and if so, log in the
    //   first matching user. If there are no matching users, the else statement will 
    //   trigger the "Invalid login details" alert



    fetch(`http://localhost:9292/${userType}s?email=${email}&password=${password}&name=${name}`)
      .then(response => response.json())
      .then(data => {
        const matchingUsers = data.filter(user => user.email === email && user.password === password && user.name === name);
        if (matchingUsers.length > 0) {
          setLoggedIn(true);
          if (userType === "teacher") {
            navigate("/teachers", { state: { name } });
          } else if (userType === "student") {
            navigate("/students", { state: { name } });
          }
        } else {
          alert("Invalid login details");
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred while logging in");
      });
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div>
      <div>
        <h1>Log into your account!</h1>
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
