import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About components/About";
import HowItWorks from "./How it works components/How-it-works";
import Contact from "./Contact components/Contact";
import Destination from "./Destination components/Destination";
import Login from "./Login components/Login";
import signup from "./Login components/signup";
import Popular_tour from "./Popular_tour";
import Popular_countries from "./Popular_countries";
import Navbar from "./Home components/Navbar/Navbar";
import Footer from "./Home components/Footer/Footer";

export default function Routes() {
  return (
    <Router>
      <div className="nav">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        <Route path="/destination" component={Destination} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />
        <Route path="/popular_tour" component={Popular_tour} />
        <Route path="/popular_countries" component={Popular_countries} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}
