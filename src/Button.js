import React from "react";

const Button = ({ label, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
