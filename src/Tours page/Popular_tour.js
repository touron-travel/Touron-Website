import React from "react";
import { useEffect, useState, useContext } from "react";
import "./Popular_tour.css";
import axios from "axios";
import { API } from "../backend";
import { Link, useLocation } from "react-router-dom";
import latest_tour1 from "../assests/sidebar7.jpg";
import article_img from "../assests/sidebar7.jpg";
import { ApiContext } from "../Context/ApiContext";
import Popular_tourTile from "./Popular_tourTile";

export default function Popular_tour() {
  const { countries } = useContext(ApiContext);
  const [tour, setTour] = useState([]);
  const location = useLocation();
  const [cityName, setCityName] = useState("");
  const [cityNames, setCityNames] = useState([]);
  const [tourLength, setTourLength] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [tourShown, setTourShown] = useState(4);
  // console.log(page, tourShown, tourLength, "page");
  const getCityTours = async (name) => {
    console.log(page, "inside");
    const cityTourResponse = await axios.get(
      `${API}/tour/cityname/${name}?page=${page}&pageSize=${pageSize}`
    );
    const cityTourLength = await axios.get(`${API}/tour/cityname/${name}`);
    setTourLength(cityTourLength.data.length);
    // console.log(cityTourResponse.data.length, "citytour");
    setTour(cityTourResponse.data);
  };

  const categoryTours = async (category, idealtype, tourtype) => {
    const tourResponse = await axios.get(
      `${API}/filtertour?tourCategory=${category}&idealType=${idealtype}&tourType=${tourtype}`
    );
    setTour(tourResponse.data);
  };

  const getCityNames = async (name) => {
    const cityName = await axios.get(`${API}/city/countryname/${name}`);
    setCityNames(cityName.data);
  };
  useEffect(() => {
    if (location.cityName !== undefined) {
      getCityTours(location.cityName);
      setCityName(location.cityName);
    }
  }, []);

  useEffect(() => {
    if (location.cityName === undefined) getCityTours(cityName);
  }, [page]);

  return (
    <>
      <div className="Popular_tours">
        <div className="pophome">
          <Link to="/" className="pophome1">
            Home
          </Link>
          <span className="seperator">/</span>
          <Link to="#" className="defaulthome">
            Most popular holiday tours
          </Link>
        </div>
        <div className="pop_title_search">
          <div className="poptitle">Search Tours</div>
          <div className="popsearch">
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
                    {countries.map((c, index) => {
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
                    <option value="travel_1">3 - 4 Days</option>
                    <option value="travel_2">4 - 5 Days</option>
                    <option value="travel_3">5 - 7 Days</option>
                  </select>
                </div>
              </div>
              <button className="search_bt">Submit</button>
            </form>
          </div>
        </div>
        <div className="poptour_item">
          {countries.map((country, index) => {
            if (index < 9)
              return (
                <div
                  className="popscity"
                  key={index}
                  onClick={() => {
                    setPage(1);
                    setPageSize(4);
                    setTourShown(4);
                    getCityNames(country.countryName);
                  }}
                >
                  <img className="poptour-img" src={country.imageUrl} alt="" />
                  <p className="popcity">{country.countryName}</p>
                </div>
              );
          })}
        </div>
      </div>
      <div className="cityname_container ">
        {cityNames.map((c, index) => {
          return (
            <h4
              className={cityName == c.cityName ? "active" : ""}
              key={index}
              onClick={() => {
                setPage(1);
                setPageSize(4);
                getCityTours(c.cityName);
                setCityName(c.cityName);
              }}
            >
              {c.cityName}
            </h4>
          );
        })}
      </div>

      <div className="poptour_section">
        <div>
          <div className="poptour-api">
            {tour.length == 0 && page == 1 ? (
              <h1>Tours not Found for {cityName}</h1>
            ) : (
              <>
                {tour.map((t, index) => {
                  return <Popular_tourTile t={t} key={index} />;
                })}
              </>
            )}
          </div>
          {tour.length === 0 || tourLength == 4 || tourLength <= 4 ? null : (
            <div className="pageno_flex">
              <div className="previous">
                <div
                  className="prev_icon"
                  onClick={() => {
                    setPage(page - 1);
                    setTourShown(tourShown - 4);
                  }}
                >
                  <i className="fa fa-chevron-left"></i>
                </div>
              </div>
              {tourShown >= tourLength ? null : (
                <div className="next">
                  <div
                    className="next_icon"
                    onClick={() => {
                      setPage(page + 1);
                      setTourShown(tourShown + 4);
                    }}
                  >
                    <i className="fa fa-chevron-right"></i>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div>
          <div className="tour_category">
            <div className="tour_category-title">Tour Category</div>
            <div className="tour_category-list">
              <ul>
                <li onClick={() => categoryTours("Activities", "", "")}>
                  Outdoor Activities
                </li>
                <li onClick={() => categoryTours("Hop On and Off", "", "")}>
                  Hop On and Off
                </li>
                <li onClick={() => categoryTours("Attraction", "", "")}>
                  Attraction
                </li>
                <li onClick={() => categoryTours("Learning", "", "")}>
                  Learning
                </li>
                <li onClick={() => categoryTours("", "Family and kids", "")}>
                  Family and kids
                </li>
                <li onClick={() => categoryTours("", "Young Couple", "")}>
                  Young Couple
                </li>
                <li onClick={() => categoryTours("", "Solo", "")}>Solo</li>
                <li onClick={() => categoryTours("", "Mature Couple", "")}>
                  Mature Couple
                </li>
                <li onClick={() => categoryTours("", "", "Full Day Tour")}>
                  Full Day Tour
                </li>
                <li onClick={() => categoryTours("", "", "Half Day Tour")}>
                  Half Day Tour
                </li>
                <li onClick={() => categoryTours("", "", "Night Tour")}>
                  Night Tour
                </li>
              </ul>
            </div>
          </div>
          <div className="latest_tour">
            <div className="latest_tour-title">Latest Tours</div>
            <div className="latest_tour-list">
              <div className="latest_tour-item">
                <div>
                  <img
                    className="latest_tour-image"
                    src={latest_tour1}
                    alt=""
                  />
                </div>
                <div>
                  <div className="latest_title">A tour of the Islands</div>
                  <div className="latest_cost">$3,500</div>
                  <div className="latest_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="latest_plan">7 days</span>
                  </div>
                </div>
              </div>
              <div className="latest_tour-item">
                <div>
                  <img
                    className="latest_tour-image"
                    src={latest_tour1}
                    alt=""
                  />
                </div>
                <div>
                  <div className="latest_title">A tour of the Islands</div>
                  <div className="latest_cost">$3,500</div>
                  <div className="latest_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="latest_plan">7 days</span>
                  </div>
                </div>
              </div>
              <div className="latest_tour-item">
                <div>
                  <img
                    className="latest_tour-image"
                    src={latest_tour1}
                    alt=""
                  />
                </div>
                <div>
                  <div className="latest_title">A tour of the Islands</div>
                  <div className="latest_cost">$3,500</div>
                  <div className="latest_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="latest_plan">7 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recent_articles">
            <div className="recent_articles-title">Recent Articles</div>
            <div className="recent_articles-list">
              <div className="recent_articles-item">
                <div>
                  <img
                    className="recent_articles-image"
                    src={article_img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="articles_title">
                    Pack wisely before travelling
                  </div>
                  <div className="articles_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="articles_month"> Nov 12/2020</span>
                  </div>
                </div>
              </div>
              <div className="recent_articles-item">
                <div>
                  <img
                    className="recent_articles-image"
                    src={article_img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="articles_title">
                    Pack wisely before travelling
                  </div>
                  <div className="articles_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="articles_month"> Nov 12/2020</span>
                  </div>
                </div>
              </div>
              <div className="recent_articles-item-last">
                <div>
                  <img
                    className="recent_articles-image"
                    src={article_img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="articles_title">
                    Pack wisely before travelling
                  </div>
                  <div className="articles_days">
                    <span>
                      <i className="far fa-clock"></i>
                    </span>
                    <span className="articles_month"> Nov 12/2020</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="question_block">
            <div className="question_block-title">Get a Question?</div>
            <div className="question_block-text">
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you.
            </div>
            <div className="question_block-tel">+1 1235 6789 10</div>
            <div className="question_block-mail">info@hellodigi.ru</div>
          </div>
        </div>
      </div>
    </>
  );
}