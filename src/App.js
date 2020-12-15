import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); //  [valueWeCanChange, functionTocChangeIt]

  useEffect(() => {
    // we grab wahtveer is in there
    const initialCount = JSON.parse(localStorage.getItem("myCount"));
    // we set out count to that
    setCount(initialCount);
  }, []);

  useEffect(() => {
    // here we do our nasty stuff
    localStorage.setItem("myCount", JSON.stringify(count));
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {count}</p>
    </div>
  );
}
