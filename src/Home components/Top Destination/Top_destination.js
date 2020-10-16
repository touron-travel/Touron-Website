import React, { useEffect, useState } from "react";
import "./Top_destination.css";
import axios from "axios";
import { API } from "../../backend";
import TopdestinationTile from "./Top_destinationTile";

export default function Top_destination() {
  const [city, setCity] = useState([]);
  console.log(city, "city");

  useEffect(() => {
    const getCities = async () => {
      await axios
        .get(`${API}/city?page=1&pageSize=7`)
        .then((res) => {
          setCity(res.data);
        })
        .catch((err) => console.log(err, "File missing"));
    };

    getCities();
  }, []);

  return (
    <div className="top_destination mainpage-slider">
      <div className="section_heading">
        <div className="section_subtitle">top destinations</div>
        <div className="section_title">Touron - Operator</div>
        <div className="description">
          <div className="left">
            <p className="text">
              Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor
            </p>
          </div>
          <div className="right">
            <p className="text">
              Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor
            </p>
          </div>
        </div>
      </div>
      <div className="section_content popular_destination__content">
        <div className="section_item">
          {city.map((t, index) => {
             return( <TopdestinationTile t={t} key={index} />
             )
          })}
        </div>
      </div>
    </div>
  );
}
