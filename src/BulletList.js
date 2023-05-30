import React from "react";

const BulletList = (items) => {
  return (
    <div className="app">
      <h1>Bullet List</h1>
      <ul className="bullet-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
