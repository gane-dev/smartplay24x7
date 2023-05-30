import React from "react";
import "./App.css";
import Meet from "./Meet";
import Rian from "./Rian";
import Reya from "./Reya";
import Accordion from "./Accordion";
const MeetTheTeam = () => {
  return (
    <div>
      <Accordion
        key={1}
        title={"Rian Ganesh - Founder"}
        content={<Meet image="/Rian.jpeg" profile={<Rian />}></Meet>}
      />

      <Accordion
        key={2}
        title={"Reya Ganesh - Founder"}
        content={<Meet image="/Reya.jpeg" profile={<Reya />}></Meet>}
      />
    </div>
  );
};
export default MeetTheTeam;
