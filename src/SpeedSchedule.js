import React from "react";
import "./App.css";
import Button from "./Button";
const SpeedSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <br></br>
      <b>All Classes are from Monday to Friday</b>
      <br></br>
      <p>
        <b>Instructor Name</b>: Rian Ganesh
      </p>

      <p>
        <b>3x3 (July 8 - July 12)</b>
      </p>
      <p>Beginner - 1 PM - 1:30 PM</p>
      <p>Intermediate - 1:45 PM -2:15 PM</p>
      <p>Advanced - 2:45 PM- 3:15 PM</p>
      <p>
        <b>2x2 (July 15 - July 19)</b>
      </p>
      <p>Beginner - 1 PM - 1:30 PM</p>
      <p>Intermediate - 1:45 PM - 2:15 PM</p>
      <p>Advanced - 2:45 - 3:15 pm</p>
      <p>
        <b>Pyraminx (July 22 - July 26)</b>
      </p>
      <p>Beginner - 1:00 PM - 1:30 PM</p>
      <p>Intermediate - 1:45 PM - 2:15 PM</p>
      <p>Advanced - 2:45 - 3:15 pm</p>

        <b>4x4 (Jul 29 - Aug 2)</b>
      <p>Beginner - 1 PM - 1:30 PM</p>
      <p>Intermediate - 1:45 PM - 2:15 PM</p>
      <p>Advanced - 2:45 PM - 3:15 PM</p>
     <br></br>
      <Button label="Register" url="https://forms.gle/HdcA2wHq1QpLM8Xu5" />
      <br></br>
      <br></br>
    </div>
  );
};
export default SpeedSchedule;
