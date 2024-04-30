import React from "react";
import "./App.css";
import Button from "./Button";
const ChessSchedule = () => {
  return (
    <div className="schedule-container">
      <br></br>
      <p >
        <b>Instructor Name</b>: Reya Ganesh & Rian Ganesh
      </p>
      <p>
        <b>Beginner Classes 3:30-4:00 PM (July 1 - June 26)
          </b>
          <br></br>
          These classes are only for beginner students who will learn the basics of chess
          <br></br>
          <br></br>
          <b>Week One:</b> (June 1 - June 5)<br></br>
          <br></br>
          <br></br>
          <b>Week Two:</b> (June 8 - June 12)<br></br>
          <br></br>
          <br></br>
          <b>Week Three:</b> (June 15 - June 19)<br></br>
          <br></br>
          <br></br>
          <b>Week Four:</b> (July 22 - June 26)<br></br>
        

      <p >
        <b>Challenge Time 4:15-4:45 PM (July 1 to July 26)</b>:<br></br>
        Find players of your skill level and play against them in a safe virtual room.
   
      </p>
      <p>
        <b>All Group Workshops</b>
        <br></br>
        <br></br>
        <b>Week One:</b> (June 1 - June 5)<br></br>
        <br></br>
        <br></br>
        <b>Week Two:</b> (June 8 - June 12)<br></br>
        <br></br>
        <br></br>
        <b>Week Three:</b> (June 15 - June 19)<br></br>
        <br></br>
        <br></br>
        <b>Week Four:</b> (July 22 - June 26)<br></br>

      </p>

      <p >
        <b>Please Signup In One of These Clubs (Corresponding to Your Skill Level) To Participate in Our Workshops</b>
        <br></br>
        <br></br>
        <a
          href="https://www.chess.com/club/smart-play-24x7-beginners"
          target="_blank"
          rel="noreferrer"
        >
          Beginners Club
        </a>
      </p>
      <p >
        <b>Intermediate (M-F 2:30PM- 3:00PM)</b>
      </p>
      <p >
        <a
          href="https://www.chess.com/club/smart-play-24x7-intermediate"
          target="_blank"
          rel="noreferrer"
        >
          Intermediate Club
        </a>
      </p>
      <p >
        <b>Advanced (M-F 3:00PM - 3:30PM)</b>
      </p>
      <p >
        <a
          href="https://www.chess.com/club/smart-play-24x7-advanced"
          target="_blank"
          rel="noreferrer"
        >
          Advanced Club
        </a>
      </p>

      <Button label="Register" url="https://forms.gle/skDLeZbvjchuasTM6" />
      <br></br>
      <br></br>
      </p>
    </div>

  );
};
export default ChessSchedule;
