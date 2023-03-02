import React, { useEffect } from "react";

function Time() {
  function updateTime() {
    // Get current date and time
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // Add leading zeros if necessary
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    // Format the date and time
    let datetime =
      day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;

    // Update the div element with the formatted date and time
    document.getElementById("datetime").innerHTML = datetime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div id="datetime" style={{fontSize:"30px", }}></div>;
}

export default Time;
