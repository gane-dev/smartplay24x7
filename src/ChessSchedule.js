import React from "react";
import "./App.css";
import Button from "./Button";
const ChessSchedule = () => {
  return (
    <div className="schedule-container">
      <p>
        Find players at the same skill level as yours within our community and
        play against them. Age 8 and above.
      </p>
      <p>
        <b>Instructor Name</b>: Reya Ganesh
      </p>
      <p>
        <b>Introductory (June 19, 26, July 3, 10, 17, 24, 31)</b>
      </p>
      <p>Classes run every Monday 9:00- 9:45 a.m</p>
      <p>
        Challenge Time: Find players of your skill level and play against them
        in a safe virtual room.
      </p>
      <table className="schedule-table">
        <tr>
          <td>Beginners (M-F 4:00 - 4:30)</td>
          <td>https://www.chess.com/club/smart-play-24x7-beginners</td>
        </tr>
        <tr>
          <td>Intermediate (M-F 3:30 - 4:00)</td>
          <td>https://www.chess.com/club/smart-play-24x7-intermediate</td>
        </tr>
        <tr>
          <td>Advanced (M-F 3:00 - 3:30)</td>
          <td>https://www.chess.com/club/smart-play-24x7-advanced</td>
        </tr>
        <tr>
          <td>Master (M-F 4:30 - 5:00)</td>
          <td>https://www.chess.com/club/smart-play-24x7-master</td>
        </tr>
      </table>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLSeyqz18d0VCh2unggTXsvu9OsIdafldKxgaqd7CT_hZDqboKA/viewform?usp=share_link"
      />
    </div>
  );
};
export default ChessSchedule;
