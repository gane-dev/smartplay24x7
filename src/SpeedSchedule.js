import React from "react";
import "./App.css";
import Button from "./Button";
const SpeedSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <br></br>
      <p>
        Class runs from Jun 19 to Aug 4, all Mondays -Thursdays except July 4.
      </p>

      <p>
        <b>Instructor Name</b>: Rian Ganesh
      </p>

      <p>
        <b>2x2 (June 19, 26, July 3, 10, 17, 24, 31)</b>
      </p>
      <p>Beginner- Monday 10:00 am - 10:45 am</p>
      <p>Intermediate - Monday 11:00 am -11:45 am</p>
      <p>Advanced - Monday 1:00 pm - 1:45 pm</p>
      <p>
        <b>3x3 (June 20, 27, July 11, 18, 25, Aug 1)</b>
      </p>
      <p>Beginner- Tuesday 10:00 am - 10:45 am</p>
      <p>Intermediate - Tuesday 11:00 am -11:45 am</p>
      <p>Advanced - Tuesday 1:00 pm - 1:45 pm</p>
      <p>
        <b>3x3 OH (One Handed) (June 21, 28, July 12, 19, 26, Aug 2)</b>
      </p>
      <p>Beginner- Wednesday 10:00 am - 10:45 am</p>
      <p>Intermediate - Wednesday 11:00 am -11:45 am</p>
      <p>Advanced - Wednesday 1:00 pm - 1:45 pm</p>
      <p>
        <b>Pyraminx (June 22, 29, July 13, 20, 27, Aug 3)</b>
      </p>
      <p>Beginner- Thursday 10:00 am - 10:45 am</p>
      <p>Intermediate - Thursday 11:00 am -11:45 am</p>
      <p>Advanced - Thursday 1:00 pm - 1:45 pm</p>
      <br></br>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLSd7iXR4Zo7YtsNKy9jWBs_BbE_CP7TlCLuDf05ztPnHv4r6YQ/viewform?usp=share_link"
      />
    </div>
  );
};
export default SpeedSchedule;
