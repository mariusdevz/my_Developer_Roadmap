import { useState } from "react";
import "../styles.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container">
      <div
        className="header"
        key={Math.floor(Math.random)}
        onClick={() => setIsActive(!isActive)}
      >
        <h4>{title}</h4>
        <button>{isActive ? "+" : "-"}</button>
      </div>
      <div className="content-container">{isActive && <p>{content}</p>}</div>
    </div>
  );
};

export default Accordion;
