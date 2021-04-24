import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import Scrollup from "./components/scrollup/Scrollup";
import Footer from "./components/footer/Footer";
 import LegalNote from "./components/navbar/legalnote/LegalNote";
import Privacy from "./components/privacy/Privacy";
function App() {
  return (
    <Router basename={"app"}>
      <div className="App">
        <NavBar />
        <div className="title">
          <h1> Health & safety updates: Novel Coronavirus, Covid 19</h1>
        </div>
        <div className="linked-in">
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Body}/>
        <Route exact path="/legal-note" component={LegalNote} />
        <Route exact path='/privacy' component={Privacy} />
      </Switch>
      <Scrollup />

      <Footer />
    </Router>
  );
}

export default App;
