import "./App.css";
import Contact from "./Contact";
import { DarkModeProvider } from "./DarkModeContext";
import Details from "./Details";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Home />
        <Details />
        <Projects />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
