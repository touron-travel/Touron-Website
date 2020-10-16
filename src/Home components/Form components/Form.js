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

 


  // const submit = ()=>{
  //   console.log(name,number,destination,date,cnamae)
  // }
  return (
    <>
      <div className="search_tour">
        <div className="form">
          <div className="search_tour_form">
            <h2 className="section_subtitle">SEARCH TOUR</h2>
            <p className="section_title">
              Ready to rest? We are ready to help with the search
            </p>
          </div>
          <div className="fields">
            <div className="field">
              <div className="label">Name</div>
              <div className="field_wrap keywords">
                <input type="text" className="input" />
              </div>
            </div>
            
            <div className="field">
              <div className="label">Mobile no</div>
              <div className="field_wrap select_field">
              <input type="text" className="no"/>
              </div>
            </div>
            <div className="field">
              <div className="label">Country name</div>
              <div className="field_wrap select_field">
                <select name="tour-activity">
                  {country.map((c,index)=>{
                    return (
                    <option key={index} value={c.countryName}>{c.countryName}</option>
                    )
                  })}
                
                </select>
              </div>
            </div>
            <div className="field">
              <div className="label">Duration</div>
              <div className="field_wrap select_field">
                <select name="tour-activity">
                  <option value="travel_1">4 - 5 Days</option>
                  <option value="travel_2">5 - 7 Days</option>
                </select>
              </div>
            </div>
            <div>
            <button type="submit" className="button">Submit</button>
            </div>
          </div>   
        </div>
      </div>
    </>
  );
}
