import React from "react";
import Accordion from "./Accordion";

const Home = () => {
  return (
    <div className="home">
 
      <div className="accordion-container">
        <Accordion key={1} title={"Who Are We?"} content={<WhoWeAre />} />
        <Accordion
          key={2}
          title={"Our Goals"}
          content={<WhyAreWe />}
        />
        <Accordion
          key={3}
          title={"Our Tenets"}
          
          content={<Tenets />}
        />
      </div>
    </div>
  );
};
const WhoWeAre = () => {
  return (
    <div>
      <h2><b>We Are...</b></h2>
      <ol>
        <li>A dynamic collective of enthusiastic learners</li>
        <li>Individuals with a shared passion which drives us to continually acquire knowledge</li>
        <li>Dedicated to fostering a culture of continuous growth</li>
        <li>Believers in freely sharing insights and exchanging ideas</li>
        <li>Nurturers of collective wisdom</li>
        <li>Ones who strive to create an inclusive environment where all members feel empowered</li>
        <li>Ones who believe the journey of discovery is one of collaboration, contribution, and mutual thriving</li>
      </ol>
    </div>
  );
};
const WhyAreWe = () => {
  return (
    <div>
      <h2><b>Our Objectives Are To...</b></h2>
       <ol>
        <li>Foster the intellectual growth of young individuals</li>
        <li>Refine our teaching abilities to better educate and inspire</li>
        <li>Participate in deliberate practice to elevate our own compentencies and those of others</li>
        <li>Connect with like-minded individuals to share and enjoy hobbies together</li>
      </ol>
    </div>
  );
};
const Tenets = () => {
  return (
    <div>
      <h2><b>Our Principles Are...</b></h2>
      <ol>
        <li>Mutual respect for time is paramount</li>
        <li>Consistent practice is the sole enduring path to success</li>
        <li>Failures serve as invaluable instructors</li>
        <li>Sharing knowledge stands as the finest form of societal contribution</li>
        <li>Opponents are allies beyond the confines of the game</li>
      </ol>
    </div>
  );
};
export default Home;
