import "./App.css";
import BigLetter from "./components/bigLetter/BigLetter";
import Experience from "./components/experience/Experience";
import Home from "./components/home/Home";
import Skils from "./components/skils/Skils";
import Contact from "./components/contact/Contact";

function App() {
  return (
      <div className="app">
        <Home/>
        <Skils/>
        <BigLetter/>
        <Experience/>
        <Contact/>
      </div>
  );
}

export default App;
