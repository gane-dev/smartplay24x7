import React from "react";
import "./App.css";

const Meet = ({ image, profile }) => {
  return (
    <div className="container">
      <img
        src={process.env.PUBLIC_URL + image}
        alt="Sample"
        className="image"
      />
      {profile}
    </div>
  );
};
export default Meet;
