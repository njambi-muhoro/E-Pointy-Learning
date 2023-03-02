function Home() {
    return (
      <div style={{width: '90%', margin:"0 auto"}}>
        <div id="homeMainDiv" style={{ backgroundColor: "black" }}>
          <div style={{ padding: "30px" }}>
            <h1 style={{ color: "white", fontSize: "50px" }}>
              Grow Your Knowledge
            </h1>
            <h1 style={{ color: "white", fontSize: "50px" }}>
              To Advance Your Chances of Passing Every Test
            </h1>
          </div>
          <div id="midHomeDiv">
            <p style={{ color: "white", fontSize: "20px" }}>
              No Credit Card Required
            </p>
            <i
              className="fa-sharp fa-solid fa-grip-lines-vertical"
              style={{ color: "red", fontSize: "2.5em" }}
            ></i>
            <p style={{ color: "white", fontSize: "20px" }}>7 days trial</p>
            <i
              className="fa-sharp fa-solid fa-grip-lines-vertical"
              style={{ color: "red", fontSize: "2.5em" }}
            ></i>
            <p style={{ color: "white", fontSize: "20px" }}>Free for teachers</p>
          </div>
          <div className="wrapper" id="buttonId">
            <button> Get Started Now</button>
          </div>
          <div
            style={{ maxHeight: "200px", maxWidth: "100%", marginTop: "100px" }}
          >
            <h1 style={{ color: "black" }}>Hello</h1>
          </div>
        </div>
        <div
          id="homePageImages"
          style={{
            display: "flex",
            backgroundColor: "rgb(252,243,236)",
            border: "1px solid rgb(252,243,236)",
            borderRadius: "10px 20px 5px",
          }}
        >
          <div
            className="homeStudentAdvertImages"
            style={{
              backgroundColor: "rgb(248,196,50)",
              boxShadow: "0 8px 6px -6px black",
              borderRadius: "10px 20px 5px 40px",
              padding: "20px",
            }}
          >
            <img
              src="images/profile.jpg"
              alt="image1"
              style={{
                width: "30%",
                border: "1px solid black",
                borderRadius: "10px 20px 5px 40px",
              }}
            />
          </div>
  
          <div
            className="homeStudentAdvertImages"
            style={{
              backgroundColor: "rgb(79,188,251)",
              boxShadow: "0 8px 6px -6px black",
              borderRadius: "10px 20px 5px",
              padding: "20px",
            }}
          >
            <img
              src="images/profile.jpg"
              alt="image1"
              style={{
                width: "30%",
                border: "1px solid black",
                borderRadius: "10px 20px 5px 40px",
              }}
            />
          </div>
  
          <div
            className="homeStudentAdvertImages"
            style={{
              backgroundColor: "rgb(236,132,52)",
              boxShadow: "0 8px 6px -6px black",
              borderRadius: "10px 20px 5px",
              padding: "20px",
            }}
          >
            <img
              id="imageStudentAd"
              src="images/profile.jpg"
              alt="image1"
              style={{
                width: "30%",
                border: "1px solid black",
                borderRadius: "10px 20px 5px 40px",
              }}
            />
          </div>
        </div>
  
        <div style={{ backgroundColor: "rgb(252,243,236)", gap:"50px" }}>
          <div>
            <h1 style={{fontSize:"20px"}}>High Quality Video, Audio & Live Class.</h1>
            <p style={{fontSize:"20px"}}>
              High-definition vieo of higher resolution and Quality 
              
              than
              standard-definition. While there is no standardized meaning for
              high-defintion , generally any video image.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap:"30px" }} id="iconDiv">
              <div  style={{ display: "flex", gap:"20px" }}>
              <i className="fa-solid fa-volume-high" style={{color:"blue", fontSize:"30px"}}></i>
                <p style={{fontSize:"30px"}}>Audio Classes</p>
              </div>
              
              <div style={{ display: "flex", gap:"20px" }}>
              <i className="fa-solid fa-users-viewfinder" style={{color:"blue", fontSize:"30px"}}></i>
                <p style={{fontSize:"30px"}}>Live Classes</p>
              </div>
  
              <div style={{ display: "flex",  gap:"20px" }}>
              <i className="fa-solid fa-circle-play" style={{color:"blue", fontSize:"30px"}}></i>
                <p style={{fontSize:"30px"}}>Recorded Classes</p>
              </div>
              
              <div style={{ display: "flex",  gap:"20px" }}>
              <i className="fa-solid fa-book-open" style={{color:"blue", fontSize:"30px"}}></i>
                <p style={{fontSize:"30px"}}>50+ Notes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Home;
  