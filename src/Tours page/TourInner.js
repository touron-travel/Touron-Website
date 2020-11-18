import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import "./TourInner.css";
const TourInner = () => {
  let data = {
    tourCost: {
      adult: 3200,
      children: 2600,
    },
    pickUpPoint: ["No Pickup"],
    tourCategory: ["Attraction"],
    idealType: ["All Traveller Profile"],
    pickUpAvailableOn: ["Morning"],
    _id: "5f02c14e5d974f00174f4f97",
    cityName: "Singapore",
    tourName: "S.E.A. Aquarium One-Day Ticket",
    aboutTour:
      "1. Visit one of the world's largest aquariums, housing over 100,000 marine life!\n2. Get a peek of diverse ocean life inside this breath-taking space through this S.E.A. Aquarium\n3. See more than 1,000 underwater species across 50 habitats and the largest collection of manta rays\n4. Enjoy exclusive entry to Open Ocean Habitat and Ocean Dome with the Up-Close Encounter Pass!\n5. Make your own unique encounters beyond the glass panels of the aquarium through diving, dining, and more",
    imageUrl:
      "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/u5kof4eixvmohrpkfg4r/SEAAquarium%E2%84%A2One-DayTicket.webp",
    ratings: "4.7",
    reviews: "20,747",
    inclusion:
      "1 S.E.A. Aquarium™ One-Day ticket(s)\n\nOne Open Ocean Habitat exclusive viewing area ticket\n\nAdmission to select attractions: S.E.A. Aquarium™ (priority access), Ocean Dome, Meet the Dolphin Experience",
    itinerary: "-",
    tourDuration: "4-5 hours",
    tourType: "Half Day Tour",
    additionalInformation:
      "1. Feeding times are the best times to view the wondrous marine life! Feeding times are not fixed but typically occur around 3:00pm at the Open Ocean Tank and around 10:00am-11:00am at the other exhibits\n2. Enjoy convenient and affordable transportation into Sentosa by purchasing a Sentosa Express Ticket\n3. Valid hand stamp and admission ticket are required for same day re-entry admission.",
    tourPreferance: "On Your Own",
    trending: "No",
    referanceLink:
      "https://www.klook.com/en-IN/activity/119-sea-aquarium-singapore/#krt=&krid=",
    countryName: "Singapore",
    pickUpTime: "NA",
    dropTime: "NA",
    __v: 3,
  };
  //   const [countryDetails, setCountryDetails] = useState(data);

  return (
    <div className="TourInner_Details">
      <div className="TourInner_image">
        <img src={data.imageUrl} />
      </div>

      <div className="TourInner_cities">
        <h2>jvdjwdcbshjdwhjvvcwjv</h2>
      </div>
    </div>
  );
};

export default TourInner;
