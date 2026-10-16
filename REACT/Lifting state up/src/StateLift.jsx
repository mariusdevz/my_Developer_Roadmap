import { useState } from "react";
import DeveloperList from "./DeveloperList";

const StateLift = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter name..."
        value={search}
        onChange={handleSearch}
      />
      <DeveloperList search={search} />
    </div>
  );
};

export default StateLift;
