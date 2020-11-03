import React from "react";
import "./Form.css";
import axios from "axios";
import { API } from "../../backend";
import { useEffect, useState } from "react";

export default function Form() {
  const [country, setCountry] = useState([]);

  console.log(country, "country");

  useEffect(() => {
    const getCountry = async () => {
      await axios
        .get(`${API}/country`)
        .then((res) => {
          setCountry(res.data);
        })
        .catch((err) => console.log(err, "File missing"));
    };

    getCountry();
  }, []);

  return (
    <div className="search_form">
      <h2>Search tour</h2>
      <p> Ready to rest? We are ready to help with the search</p>
      <form className="searches">
        <div className="searchBox">
          <label>Name</label>
          <input type="text" name="" required="name" />
        </div>
        <div className="searchBox">
          <label>Mobile no</label>
          <input type="text" name="" required="name" />
        </div>
        <div className="searchBox">
          <label>Country Name</label>
          <div className="select_search">
            <select>
              {country.map((c, index) => {
                return (
                  <option key={index} value={c.countryName}>
                    {c.countryName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="searchBox">
          <label>Duration</label>
          <div className="select_search">
            <select>
              <option value="travel_1">4 - 5 Days</option>
              <option value="travel_2">5 - 7 Days</option>
            </select>
          </div>
        </div>
        <button className="search_bt">Submit</button>
      </form>
    </div>
  );
}
