const DeveloperList = ({ search }) => {
  const developers = ["Joline", "Lindsey", "maya", "marius", "Peter"];
  const fetchDevelopers = developers.filter((dev) => {
    return dev.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div>
      <ul>
        {fetchDevelopers.map((dev, index) => (
          <li key={index}>{dev}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeveloperList;
