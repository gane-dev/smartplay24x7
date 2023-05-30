import React from "react";
import Accordion from "./Accordion";

const Overview = () => {
  const accordionSections = [
    {
      title: "Who are we?",
      content:
        "We are self motivated middle school analytical thinkers, challenging our hand eye coordinations. With lightning thinking speed and dexterous fingers, we beat time! We are amateur teachers but have a huge drive to share our learnings and create a healthy sporting community. Content for section 1...",
    },
    {
      title: "Why are we doing this?",
      content:
        "We like playdates. And what's better than forming a virtual club to meet more friends, challenging each other for a good mental sport, while beating not just the time but also the scorching summer heat",
    },
    {
      title: "Our Tenets",
      content: "Content for section 3...",
    },
  ];

  return (
    <div className="home">
      <h1>About Us</h1>
      <div className="accordion-container">
        {accordionSections.map((section, index) => (
          <Accordion
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};
export default Overview;
