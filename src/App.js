import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeInfo from "./components/homeInfo/HomeInfo";
import About from "./components/about/About";
import Skils from "./components/skils/Skils";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Clock from "react-digital-clock";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="sidebar_app">
          <Sidebar  />
        </div>

        <h1 className="clock">
          {" "}
          <Clock hour12={false} />
        </h1>
        <Switch>
          <Route exact path="/" component={HomeInfo} />
          <Route path="/about" component={About} />
          <Route path="/skils" component={Skils} />
          <Route path="/experience" component={Experience} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
