import { useState } from "react";
import "../styles.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setbackgroundColor] = useState("");
  const [color, setColor] = useState("");
  const handleClick = () => {
    setbackgroundColor(backgroundColor === "#1a1a1a" ? "white" : "#1a1a1a");
    setColor(color === "#c7c42b" ? "#1a1a1a" : "#c7c42b");
  };
  return (
    <div
      style={{
        backgroundColor,
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        transition: "0.6s",
      }}
    >
      <h3 style={{ color }}>This is the real world...</h3>
      <div>
        <button
          style={{
            border: `4px solid ${color}`,
            backgroundColor,
            color,
          }}
          onClick={handleClick}
        >
          {backgroundColor === "#1a1a1a" ? "Black Theme" : "White Theme"}
        </button>
      </div>
    </div>
  );
};

export default ToggleBackgroundColor;
