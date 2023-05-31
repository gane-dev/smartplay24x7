import React from "react";
import "./App.css";
import Button from "./Button";
const SpeedSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <br></br>
      <p>We recommend learning 3x3, then move on to 2x2, Pyraminx</p>
      <p>Workshops run from Mon - Fri</p>
      <p>
        <b>Instructor Name</b>: Rian Ganesh
      </p>

      <p>
        <b>3x3 (July 10 - July 14)</b>
      </p>
      <p>Beginner - 10:00 am - 10:45 am</p>
      <p>Intermediate - 11:00 am -11:45 am</p>
      <p>Advanced - 1:00 pm - 1:45 pm</p>
      <p>
        <b>2x2 (July 17 - July 21)</b>
      </p>
      <p>Beginner - 10:00 am - 10:45 am</p>
      <p>Intermediate - 11:00 am -11:45 am</p>
      <p>Advanced - 1:00 pm - 1:45 pm</p>
      <p>
        <b>Pyraminx (July 24 - July 28)</b>
      </p>
      <p>Beginner - 10:00 am - 10:45 am</p>
      <p>Intermediate - 11:00 am -11:45 am</p>
      <p>Advanced - 1:00 pm - 1:45 pm</p>
      <br></br>
      <Button label="Register" url="https://forms.gle/BC8rp5uwGeskeJZq5" />
    </div>
  );
};
export default SpeedSchedule;
