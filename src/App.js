import "./App.css";
import BigLetter from "./components/bigLetter/BigLetter";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Skils from "./components/skils/Skils";

function App() {
  return (
      <div className="app">
        <Home/>
        <Skils/>
        <BigLetter/>
        <Experience/>
      </div>
  );
}

export default App;
