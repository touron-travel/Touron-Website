import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About components/About";
import HowItWorks from "./How it works components/How-it-works";
import Contact from "./Contact components/Contact";
import Destination from "./Destination components/Destination";
import Login from "./Login components/Login";
import signup from "./Login components/signup";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/contact" component={Contact} />
        <Route path="/destination" component={Destination} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />
      </Switch>
    </BrowserRouter>
  );
}
