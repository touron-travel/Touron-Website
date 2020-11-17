import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About components/About";
import HowItWorks from "./How it works components/How-it-works";
import Contact from "./Contact components/Contact";
import Destination from "./Destination components/Destination";
import Login from "./Login components/Login";
import signup from "./Login components/signup";
import Popular_tour from "./Tours page/Popular_tour";
import Popular_countries from "./Country Page/Popular_countries";
import Navbar from "./Home components/Navbar/Navbar";
import Footer from "./Home components/Footer/Footer";
import axios from "axios";
import { API } from "./backend";
import { ApiContext } from "./Context/ApiContext";
import CountryInner from "./Country Page/CountryInner";

export default function Routes() {
  const [tours, setTour] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const getTours = async () => {
    try {
      const tourResponse = await axios.get(`${API}/tour`);
      setTour(tourResponse.data);
      // console.log(tourResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(`${API}/country`);
      setCountries(countryResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getCities = async () => {
    try {
      const cityResponse = await axios.get(`${API}/city`);
      setCities(cityResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    getCountries();
  }, []);
  useEffect(() => {
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
          <Route path="/countryinner/:country" component={CountryInner} />
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </ApiContext.Provider>
  );
}
