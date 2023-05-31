import React from "react";
import "./App.css";

const Meet = ({ image, profile }) => {
  return (
    <div className="container">
      <div>
        <img
          src={process.env.PUBLIC_URL + image}
          alt="Sample"
          className="image"
        />
        {profile}
      </div>
    </div>
  );
};
export default Meet;
