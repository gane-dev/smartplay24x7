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
        title={"Learn and Practice Chess: An Introduction to the Game"}
        content={<Meet image="/smartplaychessnew.jpeg" profile={<Chess />}></Meet>}
      />
      <Accordion
        key={2}
        title={"Python"}
        content={<Meet image="/python.jpg" profile={<Python />}></Meet>}
      />
    </div>
  );
};
export default Games;
