import React from "react";
import "./App.css";
import Button from "./Button";
const PythonSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container" style={{ padding: "0 35px" }}>
      <br></br>
      <b>All Classes are from Monday to Friday</b>
      <br></br>
      <p>
        <b>Instructor Name</b>: Reya & Rian Ganesh
      </p>
      <p>
        <b>
          Python Classes: 5:00 - 5:40 PM (July 7th - July 31st).
        </b>
      </p>
      <p>
      Python is a clean, versatile language prized for its readability and rich ecosystem—powering everything from dynamic websites with Django and Flask to data analysis and machine learning with pandas, NumPy, and scikit-learn. In each 40-minute session, we’ll introduce a core concept—variables, loops, or functions—and apply it in a hands-on mini-project, such as a simple calculator, web scraper, or text-based game.
      Along the way, we’ll pause for quick quizzes and live coding challenges.
      </p>
      <br></br>
      <b>Week One:</b> (July 7th - July 11th)<br></br>
      <br></br>
      <br></br>
      <b>Week Two:</b> (July 14th - July 18th)<br></br>
      <br></br>
      <br></br>
      <b>Week Three:</b> (July 21st - July 25th)<br></br>
      <br></br>
      <br></br>
      <b>Week Four:</b> (July 28th - July 31st)<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLSdh5329ja0am_svfpLajxxCbsXPzU3UOyZFRx6jb9yduZOUhw/viewform?usp=sharing"
      />
      <br></br>
      <br></br>
    </div>
  );
};
export default PythonSchedule;
