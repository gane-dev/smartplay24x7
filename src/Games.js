import React from "react";
import "./App.css";
import Meet from "./Meet";
import SpeedCubing from "./SpeedCubing";
import Chess from "./Chess";
import Origami from "./Origami";
import Accordion from "./Accordion";
const Games = () => {
  return (
    <div>
      <Accordion
        key={1}
        title={"CheckMate"}
        content={<Meet image="/Chess.jpeg" profile={<Chess />}></Meet>}
      />
      <Accordion
        key={2}
        title={"Speedcubing"}
        content={<Meet image="/speed.jpeg" profile={<SpeedCubing />}></Meet>}
      />
      
    
    </div>
  );
};
export default Games;
