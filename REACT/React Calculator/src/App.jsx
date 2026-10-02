import { useState } from "react";

const App = () => {
  const [bill, setBill] = useState("");
  const [tipRate, setTipRate] = useState("");

  const handleChange = (e) => setBill(Number(e.target.value));
  const handleTip = (e) => setTipRate(Number(e.target.value));
  const tip = bill * (tipRate / 100);
  const total = tip + bill;

  return (
    <div>
      <h2>Tip Calculator</h2>
      <input
        type="number"
        value={bill}
        onChange={handleChange}
        placeholder="Enter bill"
      />
      <input
        type="number"
        value={tipRate}
        onChange={handleTip}
        placeholder="Enter tip"
      />
      <p>Tip: ${tip}</p>
      <p>Total: ${total}</p>
    </div>
  );
};

export default App;
