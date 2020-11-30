import React, { useState, useEffect } from "react";
import "./Popular_countries.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../backend";
export default function Popular_countries() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const countryResponse = await axios.get(
        `${API}/country?page=${page}&pageSize=${pageSize}`
      );
      setCountries(countryResponse.data);
      console.log(countryResponse.data, "data");
    } catch (err) {
      console.log(err, "err");
    }
  };

  const setPagination = (page, pageSize) => {
    setPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    getCountries();
  }, [pageSize, page]);
  return (
    <>
      <div className="Popular_countries">
        <div className="popularCountry_Back">
          <div className="popcountry">
            <Link to="/" className="popcountry1">
              Home
            </Link>
            <span className="seperator">/</span>
            <Link to="#" className="defaultcountry">
              Most popular countries
            </Link>
          </div>
          <div className="countriesSection-title">
            <div className="countrySection-Subtitle">
              Explore tours by countries
            </div>
            <div className="countrySection-Title">Countries</div>
          </div>
        </div>
      </div>
      <div className="popularCountries_section">
        {countries.map((c, index) => {
          if (index < 6)
            return (
              <div className="country_content1">
                <Link
                  className="plink"
                  to={{
                    pathname: `/countrydetails/${c.countryName}/${c._id}`,
                  }}
                >
                  <div className="country_img">
                    <img src={c.imageUrl} alt="" />
                  </div>
                  <div className="countryflag">
                    <img src={c.countryFlagImage} alt="" />
                  </div>
                  <div className="countryk">
                    <div className="countryname">{c.countryName}</div>
                    <p className="countrydesc">
                      {c.aboutCountry.slice(0, 200)}
                    </p>
                  </div>
                </Link>
                <Link className="plink" to="/popular_tour">
                  <p className="countryview">View all tours</p>
                </Link>
              </div>
            );
        })}
      </div>
      <div className="countries-pageno_flex">
        <div className="countries-pageno_icon">
          <i
            className="fa fa-chevron-left"
            onClick={() => {
              setPage(page - 1);
            }}
          ></i>
        </div>
        <div className="countries-pageno">
          <p
            onClick={() => setPagination(1, 6)}
            style={{
              backgroundColor: page === 1 ? "#fff" : "",
              color: page === 1 ? "#db6500" : "",
            }}
          >
            1
          </p>
          <p
            onClick={() => setPagination(2, 6)}
            style={{
              backgroundColor: page === 2 ? "#fff" : "",
              color: page === 2 ? "#db6500" : "",
            }}
          >
            2
          </p>
          <p
            onClick={() => setPagination(3, 6)}
            style={{
              backgroundColor: page === 3 ? "#fff" : "",
              color: page === 3 ? "#db6500" : "",
            }}
          >
            3
          </p>
          <p
            onClick={() => setPagination(4, 6)}
            style={{
              backgroundColor: page === 4 ? "#fff" : "",
              color: page === 4 ? "#db6500" : "",
            }}
          >
            4
          </p>
          <p
            onClick={() => setPagination(5, 6)}
            style={{
              backgroundColor: page === 5 ? "#fff" : "",
              color: page === 5 ? "#db6500" : "",
            }}
          >
            5
          </p>
          <p
            onClick={() => setPagination(6, 6)}
            style={{
              backgroundColor: page === 6 ? "#fff" : "",
              color: page === 6 ? "#db6500" : "",
            }}
          >
            6
          </p>
          <p
            onClick={() => setPagination(7, 6)}
            style={{
              backgroundColor: page === 7 ? "#fff" : "",
              color: page === 7 ? "#db6500" : "",
            }}
          >
            7
          </p>
          <p
            onClick={() => setPagination(8, 6)}
            style={{
              backgroundColor: page === 8 ? "#fff" : "",
              color: page === 8 ? "#db6500" : "",
            }}
          >
            8
          </p>
        </div>
        {page === 8 ? null : (
          <div className="countries-pageno_icon">
            <i
              className="fa fa-chevron-right"
              onClick={() => {
                setPage(page + 1);
              }}
            ></i>
          </div>
        )}
      </div>
    </>
  );
}
