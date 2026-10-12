import { useState } from "react";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPasword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validName = name.trim() !== "";
    if (!validName) {
      setNameErr("Enter a name");
    } else {
      setNameErr("correct ✅");
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!validEmail) {
      setEmailErr("Enter valid Email");
    } else {
      setEmailErr("correct ✅");
    }
    const validPassword = password.trim() !== "" || password.length >= 8;
    if (!validPassword) {
      setPasswordErr("Enter valid password");
    } else {
      setPasswordErr("correct ✅");
    }
    const validForm = validName && validEmail && validPassword;
    console.log("Name valid:", validName);
    console.log("Email valid:", validEmail);
    console.log("Password valid:", validPassword);
    console.log("Form valid:", validForm);

    // Validation check submitted
    if (!validForm) {
      return;
    }
    console.log("Signup succesfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>SignUp Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName} />
        <span
          style={
            nameErr === "correct ✅" ? { color: "#1a1" } : { color: "#fe4444" }
          }
        >
          {nameErr}
        </span>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmail} />
        <span
          style={
            emailErr === "correct ✅" ? { color: "#1a1" } : { color: "#fe4444" }
          }
        >
          {emailErr}
        </span>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePass} />
        <span
          style={
            passwordErr === "correct ✅"
              ? { color: "#1a1" }
              : { color: "#fe4444" }
          }
        >
          {passwordErr}
        </span>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Form;
