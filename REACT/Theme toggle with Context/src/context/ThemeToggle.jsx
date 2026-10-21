import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const themeStyles =
    theme === "light"
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "black", color: "white" };

  return (
    <div style={themeStyles}>
      <h1 style={themeStyles}>Theme Toggle</h1>
      <button style={themeStyles} onClick={handleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
