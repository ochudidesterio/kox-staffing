import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="title">
          <h1> Health & safety updates: Novel Coronavirus, Covid 19</h1>
        </div>
        <div className="linked-in">
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <Body/>
    </Router>
  );
}

export default App;
