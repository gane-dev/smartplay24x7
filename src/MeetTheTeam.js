import React from "react";
import "./App.css";
import Meet from "./Meet";
import Rian from "./Rian";
import Reya from "./Reya";

const MeetTheTeam = () => {
  return (
    <div>
      <Meet image="/Rian.jpeg" profile={<Rian />}></Meet>
      <br></br>
      <Meet image="/Reya.jpeg" profile={<Reya />}></Meet>
    </div>
  );
};
export default MeetTheTeam;
