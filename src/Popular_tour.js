import React from "react";
import { useEffect, useState, useContext } from "react";
import "./Popular_tour.css";
import axios from "axios";
import { API } from "./backend";
import { Link, useLocation } from "react-router-dom";
import latest_tour1 from "./assests/sidebar7.jpg";
import article_img from "./assests/sidebar5.jpg";
import Popular_tourTile from "./Popular_tourTile";
import { ApiContext } from "./Context/ApiContext";

export default function Popular_tour() {
  const { tours, countries } = useContext(ApiContext);
  const [cityName, setCityName] = useState("");
  const [tour, setTour] = useState(tours);
  const location = useLocation();
  console.log(cityName, "cityNmae");

  const getCityTours = async () => {
    setCityName(location.cityName);
    const cityTourResponse = await axios.get(
      `${API}/tour/cityname/${location.cityName}`
    );
    // setCities(cityResponse.data);
    console.log(cityTourResponse.data, "cityTOurs");
    setTour(cityTourResponse.data);
  };

  useEffect(() => {
    getCityTours();
  }, []);

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
                <div className="popscity">
                  <img className="poptour-img" src={country.imageUrl} alt="" />
                  <p className="popcity">{country.countryName}</p>
                </div>
              );
          })}
        </div>
      </div>
      <div className="poptour_section">
        <div>
          <div className="poptour-api">
            {tour.map((t, index) => {
              if (index < 4) return <Popular_tourTile t={t} key={index} />;
            })}
          </div>
          <div className="pageno_flex">
            <div className="pageno_icon">
              <i className="fa fa-chevron-left"></i>
            </div>
            <div className="pageno">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
            </div>
            <div className="pageno_icon">
              <i className="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="tour_category">
            <div className="tour_category-title">Tour Category</div>
            <div className="tour_category-list">
              <ul>
                <li>Outdoor Activities</li>
                <li>City Tours</li>
                <li>Cultural & Thematic Tours</li>
                <li>Indulgence & Luxury Tours</li>
                <li>Family Friendly Tours</li>
                <li>Holiday & Seasonal Tours</li>
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
              <div className="latest_tour-item-last">
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
