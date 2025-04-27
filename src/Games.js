import React from "react";
import "./App.css";
import Meet from "./Meet";

import Chess from "./Chess";
import Python from "./Python";
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
        title={"Python"}
        content={<Meet image="/speed.jpeg" profile={<Python />}></Meet>}
      />
    </div>
  );
};
export default Games;
