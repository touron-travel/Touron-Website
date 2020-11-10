import React, { useContext } from "react";
import "./Top_destination.css";
import TopdestinationTile from "./Top_destinationTile";
import { ApiContext } from "../../Context/ApiContext";

export default function Top_destination() {
  const { cities } = useContext(ApiContext);
  // const [city, setCity] = useState(cities);
  // console.log(city, "city");

  return (
    <div className="top_destination">
      <div className="section_heading">
        <div className="section_subtitle">top destinations</div>
        <div className="section_titles">
          <h2>Touron - Operator</h2>
        </div>
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
          {cities.map((t, index) => {
            if (index < 7) return <TopdestinationTile t={t} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
