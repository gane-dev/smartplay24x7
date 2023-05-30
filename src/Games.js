import React from "react";
import "./App.css";
import Meet from "./Meet";
import SpeedCubing from "./SpeedCubing";
import Chess from "./Chess";
import Origami from "./Origami";

const Games = () => {
  return (
    <div>
      <Meet image="/Chess.jpeg" profile={<Chess />}></Meet>
      <Meet image="/speed.jpeg" profile={<SpeedCubing />}></Meet>
      <Meet image="/origami.jpeg" profile={<Origami />}></Meet>
    </div>
  );
};
export default Games;
