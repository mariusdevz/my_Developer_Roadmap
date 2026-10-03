import Card from "./Card";

const App = () => {
  const courses = [
    { title: "JavaScript", description: "Learn Basics" },
    { title: "React", description: "Build UIs" },
    { title: "TypeScript", description: "Add types" },
  ];

  return courses.map((course, index) => (
    <div key={index}>
      <Card title={course.title} description={course.description} />
    </div>
  ));
};

export default App;
