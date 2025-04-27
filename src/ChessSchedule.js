import React from "react";
import "./App.css";
import Button from "./Button";

const ChessSchedule = () => {
  return (
    <div className="schedule-container" style={{ padding: "0 35px" }}>
      <br />
      <b>All Classes are from Monday to Friday</b>
      <br />
      <p>
        <b>Instructor Names</b>: Reya Ganesh & Rian Ganesh
      </p>
      <p>
        <b>Beginner Classes 4:00-4:40 PM (July 7th - July 31st).</b>
        <br />
        <br />
        During this time, students will learn the basics of chess, including how
        to set up the board, how each piece moves, and basic strategies for
        playing the game. As the weeks progress, students will delve into more
        advanced techniques, such as controlling the center, developing pieces
        effectively, and other tactics. The class will be interactive and
        hands-on, with plenty of opportunities for students to practice what
        they learn and play against other students.
        <br />
        <br />
        <b>Week One:</b> (July 7th - July 11th)
        <br />
        <br />
        <b>Week Two:</b> (July 14th - July 18th)
        <br />
        <br />
        <b>Week Three:</b> (July 21st - July 25th)
        <br />
        <br />
        <b>Week Four:</b> (July 28th - July 31st)
        <br />
        <br />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button
          label="Register"
          url="https://docs.google.com/forms/d/e/1FAIpQLSdh5329ja0am_svfpLajxxCbsXPzU3UOyZFRx6jb9yduZOUhw/viewform?usp=sharing"
        />
        <br />
        <br />
      </p>
    </div>
  );
};

export default ChessSchedule;

/*import React from "react";
import "./App.css";
import Button from "./Button";
const ChessSchedule = () => {
  return (
    <div className="schedule-container">
      <br></br>
      <b>All Classes are from Monday to Friday</b>
      <br></br>
      <p>
        <b>Instructor Names</b>: Reya Ganesh & Rian Ganesh
      </p>
      <p>
        <b>
          Beginner Classes 4:00-4:40 PM (July 7th - July 31st).
        </b>
        <br></br>
        <br></br>
        During this time, students will learn the basics of chess, including how
        to set up the board, how each piece moves, and basic strategies for
        playing the game. As the weeks progress, students will delve into more
        advanced techniques, such as controlling the center, developing pieces
        effectively, and other tactics. The class will be interactive and
        hands-on, with plenty of opportunities for students to practice what
        they learn and play against other sutdents.
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
        <br></br>
        <Button
          label="Register"
          url="https://docs.google.com/forms/d/e/1FAIpQLSdh5329ja0am_svfpLajxxCbsXPzU3UOyZFRx6jb9yduZOUhw/viewform?usp=sharing"
        />
        <br></br>
        <br></br>
      </p>
    </div>
  );
};
export default ChessSchedule;*/
