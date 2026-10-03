import { useState } from "react";

const Toggle = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!false);
  };
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Toggle;
