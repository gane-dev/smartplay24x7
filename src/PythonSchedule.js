import React from "react";
import "./App.css";
import Button from "./Button";
const PythonSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <br></br>
      <b>All Classes are from Monday to Friday</b>
      <br></br>
      <p>
        <b>Instructor Name</b>: Reya & Rian Ganesh
      </p>
      <br></br>
      During this time, students will learn the basics of chess, including how
      to set up the board, how each piece moves, and basic strategies for
      playing the game. As the weeks progress, students will delve into more
      advanced techniques, such as controlling the center, developing pieces
      effectively, and other tactics. The class will be interactive and
      hands-on, with plenty of opportunities for students to practice what they
      learn and play against other sutdents.
      <br></br>
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
