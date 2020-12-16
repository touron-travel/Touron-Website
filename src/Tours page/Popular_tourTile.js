import React, { useState, useEffect } from "react";
import "./Popular_tour.css";
import * as AiIcons from "react-icons/ai";
import { isAuthenticated } from "../Login components/auth";
import { firedb } from "../firebase";
import { Link } from "react-router-dom";
export default function Popular_tourTile({ t }) {
  const [uid, setUid] = useState("");

  const { user } = isAuthenticated();
  // setUid(user.uid);
  // const getSavedTours = () => {
  //   let sT = [];
  //   let sTNames = [];
  //   if (isAuthenticated()) {
  //     firedb.ref(`saved-tours`).on("value", (data) => {
  //       if (data) {
  //         data.forEach((c) => {
  //           sT.push(c.val());
  //           sTNames.push(c.val().tourName);
  //         });
  //       }
  //     });

  //     return [sT, sTNames];
  //   } else {
  //     return [sT, sTNames];
  //   }
  // };

  // const [sT, sTNames] = getSavedTours();
  // const [savedTours, setSavedTours] = useState(sTNames);
  // const [savedToursDetails, setSavedToursDetails] = useState(sT);
  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     if (savedToursDetails.length > 0) {
  //       firedb
  //         .ref(`saved-tours`)
  //         .set(savedToursDetails)
  //         .then((data) => console.log(data))
  //         .catch((err) => console.log(err));
  //     }
  //   }
  // }, [savedToursDetails]);
  return (
    <div className="poptour_trends">
      <img className="poptour_img" src={t.imageUrl} alt="" />
      <div className="poptour_details">
        <h3 className="poptour_title">
          {t.tourName}
          {/* {savedTours.includes(t.tourName) ? (
            <AiIcons.AiOutlineHeart
              onClick={() => {
                let filterData = savedTours.filter((c) => {
                  return c != t.tourName;
                });
                console.log("filterData :>> ", filterData);
                setSavedTours(filterData);

                const filterDetails = savedToursDetails.filter((c) => {
                  return c.tourName !== t.tourName;
                });

                setSavedToursDetails(filterDetails);
                firedb
                  .ref(`saved-tours`)
                  .update(savedToursDetails)
                  .then((data) => console.log(data))
                  .catch((err) => console.log(err));
              }}
            />
          ) : (
            <AiIcons.AiFillHeart
              onClick={() => {
                if (isAuthenticated()) {
                  let saved = [...savedTours, t.tourName];
                  let savedDetails = [...savedToursDetails, t];
                }
              }}
            />
          )} */}
        </h3>
        <p className="poptour_description">{t.aboutTour.slice(0, 100)}</p>
        <div className="poptour_days">
          <i className="far fa-clock"></i>
          <span>{t.tourDuration}</span>
          <span>/</span>
          <span>{t.tourType}</span>
        </div>
      </div>
    </div>
  );
}
