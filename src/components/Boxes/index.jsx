import React from "react";
import "./Boxes.scss";

const Boxes = ({ number, name, color }) => {
  return (
    <div className={color}>
      <div className="number">{number}</div>
      <div>{name}</div>
    </div>
  );
};

export default Boxes;
