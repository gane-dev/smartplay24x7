import React from "react";
import Accordion from "./Accordion";

const Overview = () => {
  const accordionSections = [
    {
      title: "Who Are We?",
      content:
        "We are a dynamic collective of enthusiastic learners, driven by a shared passion for acquiring knowledge and nurturing a culture of continuous growth. Our dedication extends beyond personal development; we are equally committed to cultivating a supportive community where insights are shared freely, ideas are exchanged, and collective wisdom flourishes. Through our collaborative efforts, we aim to create an inclusive environment where every member feels empowered to contribute, learn, and thrive together on our journey of discovery."
    },
    {
      title: "Our Goals",
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
