import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

const HiddenSearchBar = () => {
  const [inputBar, setInputBar] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setInputBar(false);
      setBgColor("#fff");
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {inputBar ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch className="icon" onClick={() => setInputBar(true)} />
      )}
    </div>
  );
};

export default HiddenSearchBar;
