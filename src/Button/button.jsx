import React from "react";
import "./button.css";
import { BtnContext } from "../context/btn-context";
import { useContext } from "react";

const Button = () => {
  const data = useContext(BtnContext);

  return (
    <div>
      <button onClick={data.changeCount}>{data.btn}</button>
    </div>
  );
};

export default Button;
