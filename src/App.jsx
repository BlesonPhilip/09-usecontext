import React from "react";
import "./App.css";
import Card from "./Card/card";
import { BtnContext } from "./context/btn-context";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="container">
      <h1>{count}</h1>
      <BtnContext.Provider value={{ btn: "try now", changeCount }}>
        <Card />
      </BtnContext.Provider>
    </div>
  );
};

export default App;
