import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times.`;
  }, [count]);
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "15px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{ textAlign: "center", fontSize: "48px", fontFamily: "fantasy" }}
      >
        {count}
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: "20%",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          style={{
            width: "20%",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleReset}
        >
          reset
        </button>
        <button
          style={{
            width: "20%",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
