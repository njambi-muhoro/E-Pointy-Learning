import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ teachersignup, studentsignup }) {
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // work on a function to handle change
  const handlesetUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   const newUser = {
  //     name: name,
  //     password: password,
  //     email: email,
  //     userType: userType,
  //   };
  
  //   fetch('http://localhost:9292/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then(response => {
  //       if (userType === "teacher") {
  //         navigate("/login");
  //       } else if (userType === "student") {
  //         navigate("/login");
  //       }
  //     })
  //     .catch(error => console.log(error));
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const newUser = {
      name: name,
      password: password,
      email: email,
    };
  
    const apiEndpoint = userType === "teacher" ? "http://localhost:9292/teachers" : "http://localhost:9292/students";
  
    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => {
        if (response.ok) {
          navigate("/login");
        } else {
          // Handle error response
        }
      })
      .catch(error => console.log(error));
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
            <input type="text" name="name" value={name} onChange={handleName} />
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
                onChange={handleEmail}
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
              onChange={handlePassword}
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
                onChange={handlesetUserType}
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
export default SignUp;
