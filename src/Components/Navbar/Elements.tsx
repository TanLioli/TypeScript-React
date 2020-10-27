import React, { useState } from "react";

const Elements = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const dicrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Login</h1>
      <h2>Forma</h2>
      <button onClick={increment}></button>
      <button onClick={dicrement}></button>
    </div>
  );
};

export default Elements;
