import React, { useEffect, useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import "./CountryInner.css";
import axios from "axios";
import { API } from "../backend";
import SimilarTour from "./SimilarTour";
import { ApiContext } from "../Context/ApiContext";
import Slider from "react-slick";
import { Link } from "react-scroll";
import { SemipolarLoading } from "react-loadingg";
import { Form } from "reactstrap";
import { AiOutlineUserAdd, AiOutlineWhatsApp } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { GiPerson, GiCalendar } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { HiOutlineCalendar } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri";
import { BiDuplicate } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { isAuthenticated } from "../Login components/auth";
import { firedb } from "../firebase";

const CountryInner = () => {
  const { countryid, countryname } = useParams();
  const { countries } = useContext(ApiContext);
  const { userInfo } = useContext(ApiContext);
  const [countryDetails, setCountryDetails] = useState({});
  const [tourDetails, setTourDetails] = useState([]);
  const [cityDetails, setCityDetails] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTour, setSelectedTour] = useState("");
  const [countryLoaded, setCountryLoaded] = useState(false);
  const [dateModel, setDateModel] = useState(false);
  const [personsModel, setPersonsModel] = useState(false);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [toggleInfo, setToggleInfo] = useState("Flexible");
  const [tourCategories, setTourCategories] = useState("");
  const [name, setName] = useState(userInfo.name);
  const [number, setNumber] = useState(userInfo.phoneNumber);
  const [email, setEmail] = useState(userInfo.email);
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const { user } = isAuthenticated();
  let random;
  let formatedMonth;

  const [startDate, setStartDate] = useState("");
  console.log("startDate", startDate);

  const submitData = () => {
    let values = {
      fromDate: startDate,
      tourType: "",
      travellerType: "",
      adult: adult,
      children: children,
      travelMode: "",
      preferanece: "",
      destination: countryDetails.countryName,
      startPoint: "",
      name: name,
      number: number,
      email: email,
      budget: "",
      requestID: `T0-${date}${formatedMonth}${year}-${random}`,
      status: "Query Received",
      plans: "",
      reports: "",
      tourCost: "",
      userID: user.uid,
      tourCategory: tourCategories,
    };

    console.log("values :>> ", values);
    firedb
      .ref(`requests`)
      .push(values)
      .then((data) => console.log("data", data))
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    random = Math.floor((Math.random() + 4) * 345334 * Math.random());
    const requestDate = new Date();
    let currentYear = requestDate.getFullYear();
    setMonth(requestDate.getMonth() + 1);
    setDate(requestDate.getDate());
    setYear(currentYear.toString().slice(2, 4));
    formatedMonth = month < 10 ? "0" + month : month;
    console.log("formatedMonth", formatedMonth);
  });

  const openDateModel = () => {
    setDateModel(!dateModel);
  };

  const openPersonsModel = () => {
    setPersonsModel(!personsModel);
    setDateModel(false);
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weeks = ["1st week", "2nd week", "3rd week", "4th week"];

  var sectionStyle = {
    backgroundImage: `url(${countryDetails.imageUrl})`,
  };

  const getCountries = async () => {
    setCountryLoaded(true);
    try {
      const countryResponse = await axios.get(
        `${API}/country/edit/${countryid}`
      );
      setCountryDetails(countryResponse.data);
      setCountryLoaded(false);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getCities = async () => {
    try {
      const cityResponse = await axios.get(
        `${API}/city/countryname/${countryname}`
      );
      setCityDetails(cityResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };
  const getTours = async () => {
    try {
      const tourResponse = await axios.get(
        `${API}/tour/countryname/${countryname}`
      );
      setTourDetails(tourResponse.data);
    } catch (err) {
      console.log(err, "err");
    }
  };

  const getFirstCityName = () => {
    setTimeout(() => {
      console.log(cityDetails.length, "p");
      if (cityDetails.length > 0 && selectedCity == "") {
        setSelectedCity(cityDetails[0].cityName);
        console.log(cityDetails[0], "op");
      }
    }, 2000);
  };
  getFirstCityName();
  useEffect(() => {
    getCountries();
  }, [countryname]);
  useEffect(() => {
    getCities();
  }, [countryname]);
  useEffect(() => {
    getTours();
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 6.5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="countryInner_Details">
      {countryLoaded ? (
        <SemipolarLoading
          style={{
            top: "150px",
            alignItems: "center",
            left: "48%",
          }}
          size="large"
        />
      ) : (
        <>
          <div className="countryInner_image" style={sectionStyle}>
            <div className="countryInner_name">
              <h1>{countryDetails.countryName}</h1>
            </div>
          </div>
          <div className="countryInner_cities">
            <div className="cityName_container">
              <Link
                activeClass="active"
                to="countryInner_about"
                smooth={true}
                duration={500}
              >
                <p>About</p>
              </Link>
              <Link
                activeClass="active"
                to="highlights"
                smooth={true}
                duration={1000}
              >
                <p>Cities</p>
              </Link>
              <Link
                activeClass="active"
                to="tours_section"
                smooth={true}
                duration={1500}
              >
                <p>Tours</p>
              </Link>
            </div>
          </div>
          <div className="countryInner_about">
            <div className="countryInner_aboutLeft">
              <div className="inner_home">
                <div className="icon_home">
                  <NavLink to="/popular_countries">
                    <i className="far fa-home-alt"></i>
                  </NavLink>
                </div>
                <div className="icon_right">
                  <i className="fa fa-chevron-right"></i>
                </div>
                <div>
                  <span className="inner_title">
                    {countryDetails.countryName}
                  </span>
                </div>
              </div>
              <div className="inner_about">
                <p className="having">Family</p>
                <p className="having"> Romantic</p>
                <p className="having">Adventure</p>
              </div>
              <div className="main_about">
                <div className="inner_name">
                  About <span> </span>:<span> </span>
                  {countryDetails.countryName}
                </div>
                <div className="inner_desc">{countryDetails.aboutCountry}</div>
              </div>
              <div className="available">
                <div className="available-left">
                  <div className="available_t">
                    <div>
                      <i className="fas fa-cloud-sun-rain"></i>
                    </div>
                    <div>
                      <h6>Weather</h6>
                      <p className="locat">{countryDetails.weather} ℃</p>
                    </div>
                  </div>
                  <div className="available_t">
                    <div>
                      <i className="fal fa-plane-departure"></i>
                    </div>
                    <div>
                      <h6>Visa On Arrival</h6>

                      <p className="locat">
                        {countryDetails.visa !== undefined
                          ? countryDetails.visa.onArrival
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="available_t">
                    <div>
                      <i className="fad fa-calendar-day"></i>
                    </div>
                    <div>
                      <h6>Ideal Days</h6>
                      <p className="locat">{countryDetails.idealDays}</p>
                    </div>
                  </div>
                </div>
                <div className="avalable-right">
                  <div className="available_t">
                    <div>
                      <i className="fas fa-wallet"></i>
                    </div>
                    <div>
                      <h6>Curreny</h6>
                      <p className="locat">
                        {countryDetails.general !== undefined
                          ? countryDetails.general.currency
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="available_t">
                    <div>
                      <i className="fas fa-hourglass-start"></i>
                    </div>
                    <div>
                      <h6>Best time to visit</h6>
                      <p className="locat">
                        {countryDetails.general !== undefined
                          ? countryDetails.general.bestTimeToVisit.join(",")
                          : ""}
                      </p>
                    </div>
                  </div>
                  <div className="available_t">
                    <div>
                      <i className="far fa-city"></i>
                    </div>
                    <div>
                      <h6>Major Cities</h6>
                      <p className="locat">{countryDetails.bestPlaces}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="countryInner_aboutRight">
              <Form>
                <div className="countryInner_tit">
                  <b>Customise your trip to</b>
                  <div className="countryInner_tith">
                    <b>{countryDetails.countryName}</b>
                  </div>
                </div>
                <div className="countryInner_form">
                  <div className="countryInner_names">
                    <AiOutlineUserAdd className="countryInner_i" />
                    <input
                      type="text"
                      placeholder="Name"
                      size="30"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="countryInner_no">
                    <AiOutlineWhatsApp className="countryInner_i" />
                    <input
                      type="number"
                      placeholder="Whatsapp no."
                      size="30"
                      required
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                    />
                  </div>
                  <div className="countryInner_mail">
                    <FiMail className="countryInner_i" />
                    <input
                      type="email"
                      placeholder="Email"
                      size="30"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="countryInner_persons">
                    <div
                      className="countryInner_persons-flex"
                      onClick={openPersonsModel}
                    >
                      <div className="countryInner_ii">
                        <GiPerson />
                      </div>
                      <div className="countryInner_inputp">
                        {adult == 0 && children == 0 ? (
                          "No. of travellers"
                        ) : (
                          <h6>
                            {adult} adults, {children} childrens
                          </h6>
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        personsModel
                          ? "countryInner_persons-model"
                          : "countryInner_persons-model-none"
                      }
                    >
                      <div className="adult-main-flex">
                        <div className="adult">Adults</div>
                        <div className="adult-flex">
                          <div
                            className="adult-sub"
                            onClick={() => {
                              if (adult !== 0) setAdult(adult - 1);
                            }}
                          >
                            -
                          </div>
                          <div className="adult-no">{adult}</div>
                          <div
                            className="adult-add"
                            onClick={() => {
                              setAdult(adult + 1);
                            }}
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="child-main-flex">
                        <div className="child">Children</div>
                        <div className="child-flex">
                          <div
                            className="child-sub"
                            onClick={() => {
                              if (children !== 0) setChildren(children - 1);
                            }}
                          >
                            -
                          </div>
                          <div className="child-no">{children}</div>
                          <div
                            className="child-add"
                            onClick={() => {
                              setChildren(children + 1);
                            }}
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="countryInner_date">
                    <div
                      className="countryInner_date-flex"
                      onClick={openDateModel}
                    >
                      <div className="countryInner_ii">
                        <MdDateRange />
                      </div>
                      <div className="countryInner_inputd">
                        {startDate === "" ? (
                          "Dates of travel"
                        ) : (
                          <h6>Travel Date: {startDate}</h6>
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        dateModel
                          ? "countryInner_date-model"
                          : "countryInner_date-model-none"
                      }
                    >
                      <div className="countryInner_date-model-type">
                        <HiOutlineCalendar />
                        <div className="countryInner-d">Travel dates are?</div>
                      </div>
                      <div className="countryInner-date-model-cat">
                        <div
                          onClick={() => {
                            setToggleInfo("Flexible");
                          }}
                          className={
                            toggleInfo === "Flexible"
                              ? "date-flexible"
                              : "date-none"
                          }
                        >
                          Flexible
                        </div>
                        <div
                          onClick={() => {
                            setToggleInfo("Fixed");
                          }}
                          className={
                            toggleInfo === "Fixed" ? "date-fixed" : "date-none"
                          }
                        >
                          Fixed
                        </div>
                      </div>
                      {toggleInfo === "Flexible" ? (
                        <>
                          <div className="countryInner_month">
                            <HiOutlineCalendar />
                            <div className="countryInner-d">
                              Select the month of travel
                            </div>
                          </div>
                          <div className="countryInner_month-cat">
                            {months.map((months, i) => (
                              <div
                                key={i}
                                onClick={() => setStartDate(months)}
                                className={
                                  "month-cat"
                                  // startDate.includes(months)
                                  //   ? "month-cat-true"
                                  //   : "month-cat"
                                }
                              >
                                {months}
                              </div>
                            ))}
                          </div>
                          <div className="countryInner_week">
                            <RiCalendar2Line />
                            <div className="countryInner-d">
                              Select the week of travel
                            </div>
                          </div>
                          <div className="countryInner_week-cat">
                            {weeks.map((weeks, i) => (
                              <div
                                key={i}
                                className="week-cat"
                                onClick={() =>
                                  setStartDate(`${startDate},${weeks}`)
                                }
                              >
                                {weeks}
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="countryInner_calender">
                            <GiCalendar />
                            <div className="countryInner-d">
                              Select the start date of travel
                            </div>
                          </div>
                          <div className="datePicker">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              inline
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="countryInner_category">
                    <BiDuplicate className="countryInner_i" />
                    <select
                      required
                      onChange={(e) => {
                        setTourCategories(e.target.value);
                      }}
                    >
                      <option value="" disabled selected hidden>
                        Tour category
                      </option>
                      <option value="Planned Tour">Planned Tour</option>
                      <option value="Honeymoon Tour">Honeymoon Tour</option>
                      <option value="Surprise Tour">Surprise Tour</option>
                      <option value="Luxury Tour">Luxury Tour</option>
                    </select>
                  </div>
                </div>
                <div className="countryInner_btn">
                  <button className="countryInner_button" onClick={submitData}>
                    PLAN NOW
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="highlights">
            <div className="highlights_title">
              <h2>Cities</h2>
            </div>

            <div
              className={
                cityDetails.length >= 6
                  ? "highlights_image-flex1"
                  : "highlights_image-flex2"
              }
            >
              {cityDetails.map((city, index) => {
                return (
                  <div
                    className={
                      selectedCity === city.cityName
                        ? "highlights_image_selected"
                        : "highlights_image"
                    }
                    key={index}
                    onMouseOver={() => setSelectedCity(city.cityName)}
                  >
                    <img src={city.imageUrl} alt="" />
                    <div
                      className={
                        selectedCity === city.cityName
                          ? "highlights_image-subtitle-select"
                          : "highlights_image-subtitle"
                      }
                    >
                      {city.cityName}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="highlights_about">
              {cityDetails.map((city, index) => {
                if (city.cityName === selectedCity)
                  return (
                    <div className="highlights_about-desc" key={index}>
                      <h2>{city.cityName}</h2>
                      <p>{city.aboutCity}</p>
                    </div>
                  );
              })}
            </div>
          </div>
          {tourDetails.length === 0 ? null : (
            <div id="tours_section">
              <SimilarTour
                tour={tourDetails}
                selectedTour={selectedTour}
                setSelectedTour={setSelectedTour}
                countryname={countryname}
                heading={"Tours in"}
              />
            </div>
          )}
        </>
      )}
      <div className="similarcountries">
        <div className="similar-countries">
          <h2>Similar Countries</h2>
        </div>

        <Slider {...settings}>
          {countries.map((country, index) => {
            if (country.countryName !== countryDetails.countryName)
              return (
                <div className={"countries-container"} key={index}>
                  <NavLink
                    className="plink"
                    to={{
                      pathname: `/countrydetails/${country.countryName}/${country._id}`,
                    }}
                  >
                    <img src={country.imageUrl} alt="" />
                  </NavLink>
                  <div className={"similar-country-name"}>
                    {country.countryName}
                  </div>
                </div>
              );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CountryInner;
