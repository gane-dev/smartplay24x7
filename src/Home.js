import React from "react";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <div className="home">
      {/* <h2>Who are we?</h2>
      <WhoWeAre />
      <h2>Why are we doing this?</h2>
      <WhyAreWe />
      <h2>Our Tenets?</h2>
      <Tenets /> */}
      <div className="accordion-container">
        <Accordion key={1} title={"Who are we?"} content={<WhoWeAre />} />
        <Accordion
          key={2}
          title={"Why are we doing this?"}
          content={<WhyAreWe />}
        />
        <Accordion
          key={3}
          title={"What are our Tenets?"}
          content={<Tenets />}
        />
      </div>
    </div>
  );
};
const WhoWeAre = () => {
  return (
    <div>
      <ul>
        <li>
          We are a group of self-motivated middle school students who excel in
          analytical thinking. We thrive on challenges that test our hand-eye
          coordination skills.
        </li>
        <li>
          With lightning thinking speed and dexterous fingers, we beat time!
        </li>
        <li>
          We are amateur teachers but have a huge drive to share our learnings
          and create a healthy sporting community.
        </li>
      </ul>
    </div>
  );
};
const WhyAreWe = () => {
  return (
    <div>
      <p>
        We enjoy playdates, and what could be better than creating a virtual
        club to connect with more friends? We can challenge each other to
        engaging mental games, all while overcoming not only the clock but also
        the sweltering summer heat.
      </p>
    </div>
  );
};
const Tenets = () => {
  return (
    <div>
      <ul>
        <li>Respect for time is mutual.</li>
        <li>Practice is the only permanent step towards success.</li>
        <li>Failures are the best teachers.</li>
        <li>Sharing knowledge is the best way of giving back to society.</li>
        <li>Opponents are allies outside the game.</li>
      </ul>
    </div>
  );
};
export default Home;
