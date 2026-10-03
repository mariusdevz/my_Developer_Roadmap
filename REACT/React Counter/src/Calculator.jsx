import { useState } from "react";
import "./styles.css";

const Calculator = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(0);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="btns">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Calculator;
