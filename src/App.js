import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Gallery from "./pages/js/Gallery";
import Contact from "./pages/js/Contact";

import Nav from "./components/js/Nav";
import NavBar from "./components/js/NavBar";
import SocialLinks from "./components/js/SocialLinks";

import Footer from "./components/js/Footer";
import randomShapes from "./components/js/randomShapes";
import ScrollToTop from "./components/js/scrollToTop";

function App() {
  return (
    <div className="App">
      <section id="top-link"></section>

      <section id="link-down-page"></section>
      <randomShapes />

      <Router>
        <ScrollToTop />
        <Nav />
        <NavBar />
        <div id="smooth">
          <SocialLinks />
        </div>
        {/* <Route path="/Pageone" component={Page1} /> */}

        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
