import React from "react";
import "./App.css";
import Button from "./Button";
const SpeedSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <p>
        Class runs from Jun 19 to Aug 4, all Mondays -Thursdays except July 4.
      </p>

      <p>
        <b>Instructor Name</b>: Rian Ganesh
      </p>

      <p>
        <b>2x2 (June 19, 26, July 3, 10, 17, 24, 31)</b>
      </p>
      <p>Beginner- Monday 10:00 a.m - 10:45 a.m</p>
      <p>Intermediate - Monday 11:00 a.m -11:45 a.m</p>
      <p>Advanced - Monday 1:00 p.m - 1:45 p.m</p>
      <p>
        <b>3x3 (June 20, 27, July 11, 18, 25, Aug 1)</b>
      </p>
      <p>Beginner- Tuesday 10:00 a.m - 10:45 a.m</p>
      <p>Intermediate - Tuesday 11:00 a.m -11:45 a.m</p>
      <p>Advanced - Tuesday 1:00 p.m - 1:45 p.m</p>
      <p>
        <b>3x3 OH (One Handed) (June 21, 28, July 12, 19, 26, Aug 2)</b>
      </p>
      <p>Beginner- Wednesday 10:00 a.m - 10:45 a.m</p>
      <p>Intermediate - Wednesday 11:00 a.m -11:45 a.m</p>
      <p>Advanced - Wednesday 1:00 p.m - 1:45 p.m</p>
      <p>
        <b>Pyraminx (June 22, 29, July 13, 20, 27, Aug 3)</b>
      </p>
      <p>Beginner- Thursday 10:00 a.m - 10:45 a.m</p>
      <p>Intermediate - Thursday 11:00 a.m -11:45 a.m</p>
      <p>Advanced - Thursday 1:00 p.m - 1:45 p.m</p>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLSd7iXR4Zo7YtsNKy9jWBs_BbE_CP7TlCLuDf05ztPnHv4r6YQ/viewform?usp=share_link"
      />
    </div>
  );
};
export default SpeedSchedule;
