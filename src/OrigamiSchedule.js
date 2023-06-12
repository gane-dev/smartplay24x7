import React from "react";
import "./App.css";
import Button from "./Button";

const OrigamiSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <br></br>
      <p>
        Join Reya Ganesh on an origami date and make beautiful paper art
        projects. (Bring your own origami papers)
      </p>

      <p>Workshop runs from July 10 - July 28, Mon-Thur 9:15am to 9:45am</p>
      <p>
        <b>Monday 9:15am - 9:45am</b>
      </p>
      <p>
        Crane, Ninja Star, Butterfly, Tulips, box with lid, Boat that floats,
        Rabbit
      </p>
      <p>
        <b>Tuesday 9:15am - 9:45am</b>
      </p>
      <p>
        Dinosaur, Parrot, Peacock, shark, Penguins book mark , elephant bookmark
      </p>
      <p>
        <b>Wednesday 9:15am - 9:45am</b>
      </p>
      <p>Lotus, cat bookmark , Frog, Airplane, Wallet , heart</p>
      <p>
        <b>Thursday 9:15am - 9:45am</b>
      </p>
      <p>
        Envelope , Basketball Court with hoops , Iris Flower, Twitter bird , Koi
        Fish Human
      </p>
      <br></br>
      <Button label="Register" url="https://forms.gle/SnoGiPozkwCRXEp3A" />
    </div>
  );
};
export default OrigamiSchedule;
