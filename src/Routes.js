import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { API } from "./backend";
import { ApiContext } from "./Context/ApiContext";

export default function Routes() {
  const [tours, setTour] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const getTours = async () => {
    const tourResponse = await axios.get(`${API}/tour`);
    setTour(tourResponse.data);
  };

  const getCountries = async () => {
    const countryResponse = await axios.get(`${API}/country`);
    setCountries(countryResponse.data);
  };
  const getCities = async () => {
    const cityResponse = await axios.get(`${API}/city`);
    setCities(cityResponse.data);
  };

  useEffect(() => {
    getCities();
    getCountries();
    getTours();
  }, []);

  return (
    <ApiContext.Provider value={{ tours, countries, cities }}>
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
    </ApiContext.Provider>
  );
}
