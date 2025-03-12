import React from "react";
import Text from "../Text/text";
import Button from "../Button/button";
import "./card.css";
const Card = () => {
  return (
    <div className="card">
      <div className="image">
        <img src="/b.jpg" alt="Image description" />
      </div>

      <h2>sample</h2>
      <Text />

      <Button />
    </div>
  );
};

export default Card;
