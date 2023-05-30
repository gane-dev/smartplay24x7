import React from "react";
import "./App.css";
import Button from "./Button";

const OrigamiSchedule = ({ image, text }) => {
  return (
    <div className="schedule-container">
      <p>
        Join Reya Ganesh on an origami date and make beautiful 3rd arts with
        papers.
      </p>
      <p>Ages 8 and above.</p>

      <p>
        <b>Monday 10:00 - 10:30</b>
      </p>
      <p>
        (June 19 - Crane, 26 - Ninja Star July 3 - Butterfly, 10- Tulips, 17-
        box with lid, 24 - Boat that floats, 31 -Rabbit)
      </p>
      <p>
        <b>Tuesday 10:00 - 10:30</b>
      </p>
      <p>
        (June 20- Dinosaur, 27 - Parrot July 11- Peacock, 18 - shark, 25 -
        Penguins book mark Aug 1-elephant bookmark)
      </p>
      <p>
        <b>Wednesday 10:00 - 10:30</b>
      </p>
      <p>
        (June 21- Lotus, 28 - cat bookmark July 12 - Frog, 19 - airplane, 26 -
        wallet Aug 2 - heart)
      </p>
      <p>
        <b>Thursday 10:00 - 10:30</b>
      </p>
      <p>
        (June 22 - Envelope , 29 - Basketball Court with hoops July 13 - Iris
        Flower, 20 - Twitter bird , 27 - Koi Fish Aug 3 - Human)
      </p>
      <Button
        label="Register"
        url="https://docs.google.com/forms/d/e/1FAIpQLScd-85US7cGjC1HIs3k72vzEfEpgFmX9n5HPC6q9GM9Dkqdcg/viewform?usp=share_link"
      />
    </div>
  );
};
export default OrigamiSchedule;
