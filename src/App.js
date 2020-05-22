import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Gallery from "./pages/js/Gallery";
// import Contact from "./pages/js/Contact";


import Nav from "./components/js/Nav";
import Footer from "./components/js/Footer";


function App() {
  return (
    <div className="App">

      <section id="top-link">
      </section>

      <Router>
      <Nav />

      {/* <Route path="/Pageone" component={Page1} /> */}


      <Route path="/Home" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Gallery" component={Gallery} />



      {/* <div className="top-window">

      <div className="social-media-links">
      </div>
      
      </div> */}
 



      </Router>

      <Footer />



    </div>
  );
}

export default App;
