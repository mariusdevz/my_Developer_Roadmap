import ThemeProvider from "./context/ThemeProvider";
import ThemeToggle from "./context/ThemeToggle";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    </div>
  );
};

export default App;
