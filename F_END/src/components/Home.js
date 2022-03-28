import React, { useState } from "react";

const Home = () => {
  return (
    <div className="bg-home">
      <Count />
    </div>
  );
};

const Count = () => {
  // const [count, setCount] = useState(1);
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  let decrementCount = () => setCount(count - 1);
  if (count <= 1) {
    decrementCount = () => setCount(0);
  }
  return (
    <>
      <div>
        <h1>
          <span className="count">COUNT: ({count})</span>
        </h1>
        <div>
          <button className="on-btn" onClick={incrementCount}>
            Increase
          </button>
          <button className="on-btn" onClick={decrementCount}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
