import React from "react";
import "./App.css";
import Button from "./Button";
const ChessSchedule = () => {
  return (
    <div className="schedule-container">
      <br></br>
      <p>
        Find players at the same skill level as yours within our community and
        play against them.
      </p>
      <p>
        <b>Instructor Name</b>: Reya Ganesh & Rian Ganesh
      </p>
      <p>
        <b>Session Name: Introductory (June 19, 26, July 3, 10, 17, 24, 31)</b>
      </p>
      <p>Classes run every Monday 9:00- 9:45 a.m</p>
      <p>
        <b>Challenge Time</b>: Find players of your skill level and play against
        them in a safe virtual room.
      </p>
      <p>
        <b>Beginners (M-F 2:00 - 2:30)</b>
      </p>
      <p>
        <a
          href="https://www.chess.com/club/smart-play-24x7-beginners"
          target="_blank"
          rel="noreferrer"
        >
          Beginners Club
        </a>
      </p>
      <p>
        <b>Intermediate (M-F 2:30 - 3:00)</b>
      </p>
      <p>
        <a
          href="https://www.chess.com/club/smart-play-24x7-intermediate"
          target="_blank"
          rel="noreferrer"
        >
          Intermediate Club
        </a>
      </p>
      <p>
        <b>Advanced (M-F 3:00 - 3:30)</b>
      </p>
      <p>
        <a
          href="https://www.chess.com/club/smart-play-24x7-advanced"
          target="_blank"
          rel="noreferrer"
        >
          Advanced Club
        </a>
      </p>
      <p>
        <b>Master (M-F 3:30 - 4:00)</b>
      </p>
      <p>
        <a
          href="https://www.chess.com/club/smart-play-24x7-master"
          target="_blank"
          rel="noreferrer"
        >
          Master Club
        </a>
      </p>
      <br></br>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLSeyqz18d0VCh2unggTXsvu9OsIdafldKxgaqd7CT_hZDqboKA/viewform?usp=share_link"
      />
    </div>
  );
};
export default ChessSchedule;
