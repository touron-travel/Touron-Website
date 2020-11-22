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
import Slider from "react-slick";
// import ContentLoader, { Facebook } from "react-content-loader";
import {
  SemipolarLoading,
  RectGraduallyShowLoading,
  CircleLoading,
} from "react-loadingg";

export default function Popular_tour(props) {
  // const MyLoader = () => <ContentLoader />;
  // const MyFacebookLoader = () => <Facebook />;
  const { countries } = useContext(ApiContext);
  const [tour, setTour] = useState([]);
  const location = useLocation();
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [cityNames, setCityNames] = useState([]);
  const [tourLength, setTourLength] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [tourShown, setTourShown] = useState(4);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getCityTours = async (name) => {
    setContentLoaded(true);
    const cityTourResponse = await axios.get(
      `${API}/tour/cityname/${name}?page=${page}&pageSize=${pageSize}`
    );
    setTour(cityTourResponse.data);
    setContentLoaded(false);
    const cityTourLength = await axios.get(`${API}/tour/cityname/${name}`);
    setTourLength(cityTourLength.data.length);
  };

  const categoryTours = async (category, idealtype, tourtype) => {
    setContentLoaded(true);
    const tourResponse = await axios.get(
      `${API}/filtertour?tourCategory=${category}&idealType=${idealtype}&tourType=${tourtype}`
    );
    setTour(tourResponse.data);
    setContentLoaded(false);
  };

  const getCityNames = async (name) => {
    // setContentLoaded(true);
    const cityName = await axios.get(`${API}/city/countryname/${name}`);
    setCityNames(cityName.data);
    // setContentLoaded(false);
  };
  useEffect(() => {
    if (location.cityName !== undefined) {
      getCityTours(location.cityName);
    } else {
      getCityTours("Singapore");
    }
  }, []);

  useEffect(() => {
    if (cityName !== "") getCityTours(cityName);
  }, [page]);

  return (
    <>
      {/* <ContentLoader
        speed={-1}
        width={1000}
        height={1000}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
        <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
        <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
        <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
        <circle cx="20" cy="20" r="20" />
      </ContentLoader> */}

      <div className="Popular_tours">
        {/* <div className="pophome">
          <Link to="/" className="pophome1">
            Home
          </Link>
          <span className="seperator">/</span>
          <Link to="#" className="defaulthome">
            Most popular holiday tours
          </Link>
        </div> */}
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
            if (index > 8 && index < 17)
              return (
                <div
                  className={
                    country.countryName == countryName
                      ? "popscity_select"
                      : "popscity"
                  }
                  key={index}
                  onClick={() => {
                    setPage(1);
                    setPageSize(4);
                    setTourShown(4);
                    setCountryName(country.countryName);
                    getCityNames(country.countryName);
                  }}
                >
                  <img className="poptour-img" src={country.imageUrl} alt="" />
                  <p
                    className="popcity"
                    style={{
                      color:
                        countryName == country.countryName ? "#db6500" : "#fff",
                    }}
                  >
                    {country.countryName}
                  </p>
                </div>
              );
          })}
          {/* </Slider> */}
        </div>
      </div>

      {cityNames.length == 0 ? null : (
        <div className="cityname_container ">
          {cityNames.map((c, index) => {
            return (
              <h4
                className={
                  cityName == c.cityName || cityNames.length == 1
                    ? "active"
                    : ""
                }
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
      )}
      <div className="poptour_section">
        <div>
          <div className="poptour-api">
            {contentLoaded ? (
              <div className="loader">
                <SemipolarLoading
                  style={{
                    top: "230px",
                    // alignItems: "center",
                    left: "400px",
                  }}
                  // color="#4834d4"
                  size="large"
                />
                {/* <RectGraduallyShowLoading
         style={{
           top: "150px",
           alignItems: "center",
           left: "48%",
         }}
         color="#4834d4"
       />
       <CircleLoading
         style={{
           top: "150px",
           alignItems: "center",
           left: "48%",
         }}
         color="#4834d4"
       /> */}
              </div>
            ) : (
              <>
                {tour.length == 0 && page == 1 && cityName !== "" ? (
                  <>
                    <h1>Tours not Found </h1>
                    <img
                      src="https://image.freepik.com/free-vector/404-error-with-cute-animal-concept-illustration_114360-1919.jpg"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    {tour.map((t, index) => {
                      return (
                        <Link
                          key={index}
                          className="plink"
                          to={{
                            pathname: `/tourdetails/${t.countryName}/${t.tourName}/${t._id}`,
                          }}
                        >
                          <Popular_tourTile t={t} key={index} />
                        </Link>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
          {tour.length == 0 || tourLength == 4 || tourLength <= 4 ? null : (
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
                <li
                  onClick={() => {
                    categoryTours("Activities", "", "");
                    setSelectedCategory("Activities");
                  }}
                  className={selectedCategory == "Activities" ? "selected" : ""}
                >
                  Outdoor Activities
                </li>
                <li
                  onClick={() => {
                    categoryTours("Hop On and Off", "", "");
                    setSelectedCategory("Hop On and Off");
                  }}
                  className={
                    selectedCategory == "Hop On and Off" ? "selected" : ""
                  }
                >
                  Hop On and Off
                </li>
                <li
                  onClick={() => {
                    categoryTours("Attraction", "", "");
                    setSelectedCategory("Attraction");
                  }}
                  className={selectedCategory == "Attraction" ? "selected" : ""}
                >
                  Attraction
                </li>
                <li
                  onClick={() => {
                    categoryTours("Learning", "", "");
                    setSelectedCategory("Learning");
                  }}
                  className={selectedCategory == "Learning" ? "selected" : ""}
                >
                  Learning
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "Family and kids", "");
                    setSelectedCategory("Family and kids");
                  }}
                  className={
                    selectedCategory == "Family and kids" ? "selected" : ""
                  }
                >
                  Family and kids
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "Young Couple", "");
                    setSelectedCategory("Young Couple");
                  }}
                  className={
                    selectedCategory == "Young Couple" ? "selected" : ""
                  }
                >
                  Young Couple
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "Solo", "");
                    setSelectedCategory("Solo");
                  }}
                  className={selectedCategory == "Solo" ? "selected" : ""}
                >
                  Solo
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "Mature Couple", "");
                    setSelectedCategory("Mature Couple");
                  }}
                  className={
                    selectedCategory == "Mature Couple" ? "selected" : ""
                  }
                >
                  Mature Couple
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "", "Full Day Tour");
                    setSelectedCategory("Full Day Tour");
                  }}
                  className={
                    selectedCategory == "Full Day Tour" ? "selected" : ""
                  }
                >
                  Full Day Tour
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "", "Half Day Tour");
                    setSelectedCategory("Half Day Tour");
                  }}
                  className={
                    selectedCategory == "Half Day Tour" ? "selected" : ""
                  }
                >
                  Half Day Tour
                </li>
                <li
                  onClick={() => {
                    categoryTours("", "", "Night Tour");
                    setSelectedCategory("Night Tour");
                  }}
                  className={selectedCategory == "Night Tour" ? "selected" : ""}
                >
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
