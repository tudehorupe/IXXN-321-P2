import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/js/Home";
import Page1 from "./pages/js/Page1";
import Nav from "./components/js/Nav";
import Footer from "./components/js/Footer";


function App() {
  return (
    <div className="App">

      <section id="top-link">
      </section>

      <Router>
      <Nav />

      <Route path="/Pageone" component={Page1} />


      <div className="top-window">
      <Route path="/Home" component={Home} />


      <div className="social-media-links">
      </div>
      
      </div>
      <div className="second-window">
      </div>
      <div className="third-window">
      </div>
      <div className="fourth-window">
      </div>
 

      <Footer />


      </Router>


    </div>
  );
}

export default App;
