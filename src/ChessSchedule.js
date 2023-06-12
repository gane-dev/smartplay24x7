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
        <b>Pre-Beginner Workshop (June 19 -June 23) </b> 10:00 am - 10:45 am
      </p>
      <p>
        <b>Challenge Time (June 19th to July 28th)</b>: Find players of your
        skill level and play against them in a safe virtual room.
      </p>
      <p>
        <b>Beginners (M-F 2:00pm - 2:30pm)</b>:
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
        <b>Intermediate (M-F 2:30pm - 3:00pm)</b>
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
        <b>Advanced (M-F 3:00pm - 3:30pm)</b>
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
        <b>Master (M-F 3:30pm - 4:00pm)</b>
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
      <Button label="Register" url="https://forms.gle/skDLeZbvjchuasTM6" />
    </div>
  );
};
export default ChessSchedule;
