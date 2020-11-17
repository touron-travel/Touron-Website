import React from "react";
import "./PopularCountries.css";
import { Link } from "react-router-dom";

export default function PopularCountries() {
  const popularCountries = [
    {
      visa: {
        onArrival: "Yes",
        cost: 0,
      },
      general: {
        bestTimeToVisit: [
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        currency: "Maldivian rufiyaa",
        timeZone: "-30 min",
      },
      _id: "5ef5f055db65dc0017ca6936",
      countryName: "Maldives",
      aboutCountry:
        "The Maldives, officially the Republic of Maldives, is a small island nation in South Asia, located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres from the Asian continent",
      idealDays: "4-5 days",
      imageUrl:
        "https://images.pexels.com/photos/3601426/pexels-photo-3601426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "26 to 32",
      bestPlaces: "Male",
      __v: 0,
      createdAt: "2020-08-26T07:54:32.309Z",
      updatedAt: "2020-09-04T07:17:10.894Z",
    },
    {
      visa: {
        onArrival: "No",
        cost: 9000,
      },
      general: {
        bestTimeToVisit: [
          "March",
          "April",
          "May",
          "September",
          "October",
          "November",
          "December",
        ],
        currency: "New Zealand dollar",
        timeZone: "+6.5 Hours",
      },
      _id: "5efc388ed70bb90017268bc0",
      countryName: "New Zealand",
      aboutCountry:
        "New Zealand is an island country in the southwestern Pacific Ocean. It comprises two main landmasses—the North Island and the South Island —and around 600 smaller islands, covering a total area of 268,021 square kilometres.",
      idealDays: "8-10 days",
      imageUrl:
        "https://images.pexels.com/photos/3954307/pexels-photo-3954307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      weather: "17 to 24",
      bestPlaces:
        "1. Wellington 2.Auckland 3. Queenstown 4. Christchurch 5.Rotorua 6.Marlborough 7.Dunedin 8. Milford Sound",
      __v: 0,
      createdAt: "2020-08-26T10:17:18.561Z",
      updatedAt: "2020-08-27T08:36:52.842Z",
    },
    {
      visa: {
        onArrival: "YES",
        cost: 0,
      },
      general: {
        bestTimeToVisit: ["January", "Febuary", "March", "December"],
        currency: "Sri Lankan rupee",
        timeZone: "No time difference",
      },
      _id: "5ef4a6f9bd272f0017c79211",
      countryName: "Sri Lanka",
      aboutCountry:
        "Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavourful food make Sri Lanka irresistible.",
      idealDays: "8-10 days",
      imageUrl:
        "https://images.pexels.com/photos/1047051/pexels-photo-1047051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      weather: "27",
      bestPlaces: "1. Galle 2. Colombo 3. Sigiriya 4. Kandy 5. Nuwara Eliya",
      __v: 0,
      createdAt: "2020-08-26T09:25:39.745Z",
      updatedAt: "2020-08-26T10:10:37.279Z",
    },
  ];
  return (
    <div className="country">
      <div className="country-header">
        <div className="country-title">
          <div className="country-subtitle">True now</div>
          <h2>Popular Countries</h2>
        </div>
        <div>
          <Link to="./popular_countries" className="plink">
            <div className="pcountry">
              <h4>View all countries</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="country_content">
        {popularCountries.map((c) => {
          return (
            <div className="country_content2">
              <div className="country_img">
                <img src={c.imageUrl} alt="" />
              </div>
              <div className="countryflag">
                <img src={c.imageUrl} alt="" />
              </div>
              <div className="countryk">
                <div className="countryname">{c.countryName}</div>
                <p className="countrydesc">{c.aboutCountry.slice(0, 300)}</p>
              </div>
              <Link className="plink" to="/popular_tour">
                <p className="countryview">View all tours</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
