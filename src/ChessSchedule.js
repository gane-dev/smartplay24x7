import React from "react";
import "./App.css";
import Button from "./Button";
const ChessSchedule = () => {
  return (
    <div className="schedule-container">
      <br></br>
      <b>All Classes are from Monday to Friday</b>
      <br></br>
      <p >
        <b>Instructor Name</b>: Reya Ganesh & Rian Ganesh
      </p>
      <p>
        <b>Beginner Classes 3:30-4:00 PM (July 1 - July 26)
          </b>
          <br></br>
          These classes are only for beginner students who will learn the basics of chess
          <br></br>
          <br></br>
          <b>Week One:</b> (July 1 - July 5)<br></br>
          <br></br>
          <br></br>
          <b>Week Two:</b> (July 8 - July 12)<br></br>
          <br></br>
          <br></br>
          <b>Week Three:</b> (July 15 - July 19)<br></br>
          <br></br>
          <br></br>
          <b>Week Four:</b> (July 22 - July 26)<br></br>
        

      <p >
        <b>Challenge Time 4:15-4:45 PM (July 1 to July 26)</b>:<br></br>
        Find players of your skill level and play against them in a safe virtual room. Detailed instructions will be shared when we start these sessions.

   
      </p>
      <p>
        <b>Practice Sessions for all groups</b>
        <br></br>
        <br></br>
        <b>Week One:</b> (July 1 - July 5)<br></br>
        <br></br>
        <br></br>
        <b>Week Two:</b> (July 8 - July 12)<br></br>
        <br></br>
        <br></br>
        <b>Week Three:</b> (July 15 - July 19)<br></br>
        <br></br>
        <br></br>
        <b>Week Four:</b> (July 22 - July 26)<br></br>

      </p>

     
      <Button label="Register" url="https://forms.gle/vkn2kSZ6Ycm1Ub528" />
      <br></br>
      <br></br>
      </p>
    </div>

  );
};
export default ChessSchedule;
