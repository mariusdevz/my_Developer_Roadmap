import Card from "./Card";

const App = () => {
  return (
    <div>
      <Card
        title="JavaScript"
        description="Learn Basics"
        moreInfo="Learn More"
      />
      <Card title="React" description="Build UIs" moreInfo="Learn More" />
    </div>
  );
};

export default App;
