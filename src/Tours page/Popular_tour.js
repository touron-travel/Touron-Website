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
import { SemipolarLoading } from "react-loadingg";

export default function Popular_tour(props) {
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
  const [selectedCategory, setSelectedCategory] = useState([]);
  console.log("tour :>> ", tour.length);

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

  // const categoryTours = () => {
  //   setContentLoaded(true);
  //   selectedCategory.forEach(async (c) => {
  //     const tourResponse = await axios.get(
  //       `${API}/filtertour?tourCategory=${c}&idealType=${c}&tourType=${c}`
  //     );
  //     console.log(c, "c");
  //     console.log(tourResponse.data.length, "length");
  //     setTour(...tour, tourResponse.data);
  //   });
  //   setContentLoaded(false);
  // };

  const categoryTours = async (category, idealtype, tourtype) => {
    setContentLoaded(true);
    const tourResponse = await axios.get(
      `${API}/filtertour?tourCategory=${category}&idealType=${idealtype}&tourType=${tourtype}`
    );
    setTour(tourResponse.data);
    setContentLoaded(false);
  };
  const getCityNames = async (name) => {
    const cityName = await axios.get(`${API}/city/countryname/${name}`);
    setCityNames(cityName.data);
  };
  useEffect(() => {
    if (location.cityName !== undefined) {
      getCityTours(location.cityName);
    } else {
      getCityTours("Singapore");
    }
  }, []);

  const filterCategory = (category) => {
    const filteredTour = tour.filter((t) => {
      console.log(t.tourCategory.includes(category));
      return t.tourCategory.includes(category) === false;
    });

    console.log("filteredTour :>> ", filteredTour);
  };

  useEffect(() => {
    if (cityName !== "") getCityTours(cityName);
  }, [page]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick}></div>;
  }

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="Popular_tours">
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
      </div>
      <div className="country-slider">
        <Slider {...settings}>
          {countries.map((country, index) => {
            return (
              <div
                className="co"
                key={index}
                onClick={() => {
                  setPage(1);
                  setPageSize(4);
                  setTourShown(4);
                  setCountryName(country.countryName);
                  getCityNames(country.countryName);
                }}
              >
                <div className="countrydetails">
                  <img src={country.imageUrl} alt="" />
                  <p
                    className="country-name"
                    style={{
                      color:
                        countryName == country.countryName ? "#db6500" : "#fff",
                    }}
                  >
                    {country.countryName}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="cities_container">
        {countryName == "" ? null : <h1>Cities in {countryName} : </h1>}
        {cityNames.length == 0 ? null : (
          <div className="cityname_container">
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
      </div>

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
                <h4
                  style={{
                    top: "230px",
                    // alignItems: "center",
                    left: "400px",
                  }}
                >
                  Loading ...
                </h4>
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
                  className={
                    selectedCategory.includes("Activities") ? "selected" : ""
                  }
                >
                  <input
                    type="checkbox"
                    className="tour_category-list-checkbox"
                    name="activities"
                    onClick={() => {
                      if (selectedCategory.includes("Activities")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Activities";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                        filterCategory("Activities");
                      } else {
                        categoryTours("Activities", "", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Activities",
                        ]);
                      }
                    }}
                  />
                  Outdoor Activities
                </li>
                <li
                  className={
                    selectedCategory.includes("Hop On and Off")
                      ? "selected"
                      : ""
                  }
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      if (selectedCategory.includes("Hop On and Off")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Hop On and Off";
                        });
                        console.log(filter, "filter");
                        filterCategory("Hop On and Off");

                        setSelectedCategory(filter);
                      } else {
                        categoryTours("Hop On and Off", "", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Hop On and Off",
                        ]);
                      }
                    }}
                    className="tour_category-list-checkbox"
                  />
                  Hop On and Off
                </li>
                <li
                  className={
                    selectedCategory.includes("Attraction") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Attraction")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Attraction";
                        });
                        console.log(filter, "filter");
                        filterCategory("Attraction");

                        setSelectedCategory(filter);
                      } else {
                        categoryTours("Attraction", "", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Attraction",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Attraction
                </li>
                <li
                  className={
                    selectedCategory.includes("Learning") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Learning")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Learning";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                        filterCategory("Learning");
                      } else {
                        categoryTours("Learning", "", "");

                        setSelectedCategory([...selectedCategory, "Learning"]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Learning
                </li>
                <li
                  className={
                    selectedCategory.includes("Family and kids")
                      ? "selected"
                      : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Family and kids")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Family and kids";
                        });
                        console.log(filter, "filter");

                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "Family and kids", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Family and kids",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Family and kids
                </li>
                <li
                  className={
                    selectedCategory.includes("Young Couple") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Young Couple")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Young Couple";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "Young Couple", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Young Couple",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Young Couple
                </li>
                <li
                  className={
                    selectedCategory.includes("Solo") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Solo")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Solo";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "Solo", "");

                        setSelectedCategory([...selectedCategory, "Solo"]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Solo
                </li>
                <li
                  className={
                    selectedCategory.includes("Mature Couple") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Mature Couple")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Mature Couple";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "Mature Couple", "");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Mature Couple",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Mature Couple
                </li>
                <li
                  className={
                    selectedCategory.includes("Full Day Tour") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Full Day Tour")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Full Day Tour";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "", "Full Day Tour");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Full Day Tour",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Full Day Tour
                </li>
                <li
                  className={
                    selectedCategory.includes("Half Day Tour") ? "selected" : ""
                  }
                >
                  <input
                    onClick={() => {
                      if (selectedCategory.includes("Half Day Tour")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Half Day Tour";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "", "Half Day Tour");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Half Day Tour",
                        ]);
                      }
                    }}
                    type="checkbox"
                    className="tour_category-list-checkbox"
                  />
                  Half Day Tour
                </li>
                <li
                  className={
                    selectedCategory.includes("Night Tour") ? "selected" : ""
                  }
                >
                  <input
                    type="checkbox"
                    onClick={() => {
                      if (selectedCategory.includes("Night Tour")) {
                        const filter = selectedCategory.filter((category) => {
                          return category !== "Night Tour";
                        });
                        console.log(filter, "filter");
                        setSelectedCategory(filter);
                      } else {
                        categoryTours("", "", "Night Tour");

                        setSelectedCategory([
                          ...selectedCategory,
                          "Night Tour",
                        ]);
                      }
                    }}
                    className="tour_category-list-checkbox"
                  />
                  Night Tour
                </li>
                <li
                  onClick={() => {
                    categoryTours();
                  }}
                  className={
                    selectedCategory.includes("Night Tour") ? "selected" : ""
                  }
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
