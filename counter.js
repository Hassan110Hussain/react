import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>React Counter</h1>
      <h2>{count}</h2>

      <div style={styles.buttonContainer}>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer"
  }
};

export default Counter;