import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CountryInner.css";
const CountryInner = () => {
  //   const { country } = useLocation();

  const d = [
    {
      id: "20",
      title: "Dalhousie & Dharmshala",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Dharmshala (2)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Dharmshala (2)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200136011574237161.jpg",

      date_time: "2019-08-26 13:17:52PM",
    },
    {
      id: "36",
      title: "Dubai",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Inclusions : Hotel Accommodation (3 Star & above) Daily Breakfast + Taxes Included Flight Tickets + Baggage* (onward & return) - any city Round trip Airport transfers on pvt basis Visa Embassy & Processing Fee Burj Khalifa 124th & 125th Floor Entry Dinner in Dhow Cruise & Desert Safar Entrance Ticket to Underwater Aquarium & Zoo Group Transfers for all tours (Private can be arranged on request) Activities with Transfers Local Restaurants suggestions will be provided All day Support until you complete your tour Weather Report for your travel dates Complimentary, SIM CARDTour Exclusions  Lunches & Dinner (if any) based on the itinerary Overseas Travel Insurance Tips, porterage, laundry and phone calls Any service not mentioned with the inclusions Any personal expenses City Tax if any collected by Hotel Mini Bar at the Hotel, Room service etc Transfers for Atlantis/Burj Khalifa (Check with Planning Team) Entry Tickets apart from which is not mentioned in the InclusionsSightseeing Activities  Dubai City Tour (Half Day) Burj Khalifa 124, 125th Floor Access - (Half Day) Underwater Aquarium & Zoo Abu Dhabi City Tour - (Full Day) Desert Safari Sunset Tour with Dinner - (Evening Tour) Dhow Cruise with Dinner - (Evening Tour)Note  This Itinerary is displayed to give an Idea about Dubaiavailable tours and you can include any Sightseeing options of your choice. Get in touch with our planning team to get your own personalised tour plan for Dubai. Looking forward to hear from you !! Important Notice  If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!Cancellation Policy  Cancellation any time after making the 1st payment instalment till the 2nd payment date. The entire amount paid as 1st payment instalment (deposit) would be nonrefundable. Cancellation after 2nd payment instalment and before 3rd or final payment date. The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable. Cancellation after 3rd or final payment date. The full amount paid by you would be non-refundable.FREQUENTLY ASKED QUESTIONS/a's  Best time to Visit Dubai ?/a's The best time to visit Dubai is during the winter months, from's November to April. January and February see heavy tourist traffic's because of the Dubai Shopping Festival, which makes the city come's alive.'s Do i need a Visa to enter Dubai ?/a's /'s Yes, you need to apply for Visa and we will process it's  What is the Currency used in Dubai ?/a's /'s AED is used in Dubai and its the only accepted. Approximate value for 1 AED = Rs.19-20's  Will someone from your team assist us ?/a's /'s Yes, we have a Ground Team in Dubai who is well versed with local locations. They will be assisting you right from your Airport Pick up till Airport Drop 'sHow many days is Ideal for Dubai ?/a's /'s You need a minimum of 5 Days Stay for Dubai to touch down every important places.",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "201912040542201575461540.jpg",

      date_time: "2019-12-04 16:46:01PM",
      status: "1",
    },
    {
      id: "21",
      title: "Jaipur, Jodhpur",
      sub_title: "4 days / 3 Nights",
      short_description: "4 days / 3 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Jodhpur(1N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Jodhpur(1N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200134101574237050.jpg",

      date_time: "2019-08-26 13:23:25PM",
    },
    {
      id: "22",
      title: "Jaipur, Udaipur",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Udaipur(2)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Udaipur(2)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200134031574237043.jpg",

      date_time: "2019-08-28 12:45:06PM",
    },
    {
      id: "23",
      title: "Jaipur, Udaipur & Agra",
      sub_title: "6 days / 5 Nights",
      short_description: "6 days / 5 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Udaipur(2) and Agra(1N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 6 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Jaipur (2N), Udaipur(2) and Agra(1N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 6 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200133531574237033.jpg",

      date_time: "2019-09-13 10:47:39AM",
    },
    {
      id: "24",
      title: "Manali",
      sub_title: "4 Days and 3 Nights",
      short_description: "4 Days and 3 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200133411574237021.jpg",

      date_time: "2019-09-13 11:49:09AM",
    },
    {
      id: "25",
      title: "Shimla & Manali",
      sub_title: "6 days / 5 Nights",
      short_description: "Shimla and Manali - 6 days / 5 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Shimla (2N)  Manali (3N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Shimla (2N)  Manali (3N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "barcelona-3.jpg",

      date_time: "2019-09-13 12:40:44PM",
    },
    {
      id: "26",
      title: "Shimla & Manali",
      sub_title: "Shimla (2N) & Manali (2N) ",
      short_description: "Shimla (2N) & Manali (2N) ",
      description:
        "Inclusions HotelAccommodation (3 Star or above) for 5 daysShimla (2N)  Manali (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above) for 5 daysShimla (2N)  Manali (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200133141574236994.jpg",

      date_time: "2019-09-13 12:46:08PM",
    },
    {
      id: "27",
      title: "Shimla",
      sub_title: "4 Days / 3 Nights",
      short_description: "Shimla",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200133051574236985.jpg",

      date_time: "2019-09-13 12:49:21PM",
    },
    {
      id: "28",
      title: "Malaysia",
      sub_title: "2 Nights / 3 Days",
      short_description:
        "Explore the first nocturnal zoo during night safari [Combo- SIN].",
      description:
        "Inclusions 4/3 Star Hotel Accommodation within city limitsDaily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisSightseeing Activities on daily basisCost of Malaysia VisaComplimentary Local Sim card during your staySightseeingsuggestions will be providedActivities suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesService Charge  GSTExclusions Lunches  Dinner (if any) based on the itineraryOverseas Travel InsuranceTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Sightseeing ActivitesKL Tower Admission TicketKuala Lumpur Half Day City TourKuala Lumpur Suburbs and Batu CavesCancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.FREQUENTLY ASKED QUESTIONS Best time to Visit Kuala Lumpur?/aThe climate in Kuala Lumpur is quite humid overall, and one must always be ready for rains at any time of the year. Therefore, the best time to visit Kuala Lumpur is from May to July or December to February.Do I need a visa to enter Malaysia?/aYou do need a visa for tourist or business visits.What is the currency in Malaysia ?/aThe Malaysian Ringgit is the official currency of Malaysia.What is the langauge spoken in Malaysia?/aBahasa Malaysia is the national and official language. English is widely used especially in commerce and industry. Several Chinese and Indian dialects are also spoken. What is the mode of public transport in Kuala Lumpur?/aWhether you are in a hurry to get to your destination or you wish to take things leisurely, there is a wide choice of transportation to suit your needs. By air, you can travel with Malaysia Airlines domestic flights. By rail, Keretapi Tanah Melayu Berhad (KTM) of Malaysian Railways has an impressive rail network that stretches from North to South and East to West throughout Peninsula Malaysia. Buses and taxis are also available throughout Malaysia. There are also transfer services with drivers readily available.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryOverseas Travel InsuranceTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions 4/3 Star Hotel Accommodation within city limitsDaily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisSightseeing Activities on daily basisCost of Malaysia VisaComplimentary Local Sim card during your staySightseeingsuggestions will be providedActivities suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesService Charge  GST",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "201911200132541574236974.jpg",

      date_time: "2019-09-13 12:55:07PM",
    },
    {
      id: "47",
      title: "test",
      sub_title: "test",
      short_description: "test",
      description: "tes",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "202003240213381585039418.jpg",

      date_time: "2020-03-24 14:13:38PM",
      status: "1",
    },
    {
      id: "48",
      title: "Bhutan",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket tosightseeing  Parks mentioned in planAll tours are in Private TransferNo Fixed Itinerary, Sightseeing's  as per your choiceActivities SuggestionsLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Bhutan SIM CARDThimphuPunakaParoCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Bhutan's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bhutan. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Bhutan's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bhutan. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket tosightseeing  Parks mentioned in planAll tours are in Private TransferNo Fixed Itinerary, Sightseeing's  as per your choiceActivities SuggestionsLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Bhutan SIM CARD",
      Itinerary_highlights: "ThimphuPunakaParo",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004150251361586942496.jpg",

      date_time: "2020-04-15 14:51:36PM",
    },
    {
      id: "49",
      title: "Egypt",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  activities mentioned in planAll tours are shared / group / pvt basis / join inLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Egypt SIM CARDItinerary:Pyramids and Cairo SightseeingTheValley of the Kings,MortuaryTemple of Queen Hatshepsut,Sound  light show at Karnak Temples.The toweringKarnak Templesand the famedLuxor Temple.Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Egypt's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Egypt's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  activities mentioned in planAll tours are shared / group / pvt basis / join inLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Egypt SIM CARD",
      Itinerary_highlights:
        "Itinerary:Pyramids and Cairo SightseeingTheValley of the Kings,MortuaryTemple of Queen Hatshepsut,Sound  light show at Karnak Temples.The toweringKarnak Templesand the famedLuxor Temple.",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004150259391586942979.jpg",

      date_time: "2020-04-15 14:59:39PM",
    },
    {
      id: "50",
      title: "Egypt ",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  activities mentioned in planAll tours are shared / group / pvt basis / join inLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Egypt SIM CARDSound and Light show in CairoPyramids of Giza and the SphinxCity tour of Cairo and a visit to the famous Egyptian museum.Visit the Khan El-Khalili BazaarCity tour of AlexandriaThe Temple of Two GodsVisit the famous Edfu temple.Visit the tombs of the Valley of Kings, Colossi of Memnon | Temple of Hatshepsut. Karnak and Luxor Temples.Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Egypt's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Egypt's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  activities mentioned in planAll tours are shared / group / pvt basis / join inLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Egypt SIM CARD",
      Itinerary_highlights:
        "Sound and Light show in CairoPyramids of Giza and the SphinxCity tour of Cairo and a visit to the famous Egyptian museum.Visit the Khan El-Khalili BazaarCity tour of AlexandriaThe Temple of Two GodsVisit the famous Edfu temple.Visit the tombs of the Valley of Kings, Colossi of Memnon | Temple of Hatshepsut. Karnak and Luxor Temples.",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004150343491586945629.jpg",

      date_time: "2020-04-15 15:43:49PM",
    },
    {
      id: "51",
      title: "London & Dublin",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARDThe London Eye ticket  Thames River CruiseLondon Sightseeing Tour with Changing of GuardsLondon Hop on Hop Off 24hrs Bus PassLoch Ness Full Day TourCliffs of Moher Tour from DublinGiants Causeway  Belfast Titanic City TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about UK's   Ireland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about UK's   Ireland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARD",
      Itinerary_highlights:
        "The London Eye ticket  Thames River CruiseLondon Sightseeing Tour with Changing of GuardsLondon Hop on Hop Off 24hrs Bus PassLoch Ness Full Day TourCliffs of Moher Tour from DublinGiants Causeway  Belfast Titanic City Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004160558171587040097.jpg",

      date_time: "2020-04-16 17:50:51PM",
    },
    {
      id: "52",
      title: "London, Scotland & Dublin",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARDThe London Eye ticket  Thames River CruiseLondon Sightseeing Tour with Changing of GuardsStonehenge, Windsor Castle, and Bath Day Tour from LondonLondon Hop on Hop Off 24hrs Bus PassLoch Ness Full Day TourScottish Highlands and Whisky Day Tour from EdinburghCliffs of Moher Tour from DublinGiants Causeway  Belfast Titanic City TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about UK's   Ireland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about UK's   Ireland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARD",
      Itinerary_highlights:
        "The London Eye ticket  Thames River CruiseLondon Sightseeing Tour with Changing of GuardsStonehenge, Windsor Castle, and Bath Day Tour from LondonLondon Hop on Hop Off 24hrs Bus PassLoch Ness Full Day TourScottish Highlands and Whisky Day Tour from EdinburghCliffs of Moher Tour from DublinGiants Causeway  Belfast Titanic City Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004170140221587111022.jpg",

      date_time: "2020-04-17 13:38:18PM",
    },
    {
      id: "53",
      title: "Hong Kong ",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARDHong Kong Disneyland Park TicketNgong Ping 360 Ticket in Hong KongHong Kong Observation Wheel TicketAqua Luna Victoria Harbour CruiseOcean Park Hong Kong TicketCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Hong Kong available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Hong Kong available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARD",
      Itinerary_highlights:
        "Hong Kong Disneyland Park TicketNgong Ping 360 Ticket in Hong KongHong Kong Observation Wheel TicketAqua Luna Victoria Harbour CruiseOcean Park Hong Kong Ticket",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:/strong/",

      image: "202004170153231587111803.jpg",

      date_time: "2020-04-17 13:53:23PM",
    },
    {
      id: "54",
      title: "Hong Kong & Macau ",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARDHong Kong Disneyland Park TicketNgong Ping 360 Ticket in Hong KongHong Kong Observation Wheel TicketAqua Luna Victoria Harbour CruiseOcean Park Hong Kong TicketTurboJet Ferry Open Ticket (Hong Kong  Macau)Macau Tower AdmissionMacau Sightseeing Day TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Hong Kong  Macau available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Hong Kong  Macau available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARD",
      Itinerary_highlights:
        "Hong Kong Disneyland Park TicketNgong Ping 360 Ticket in Hong KongHong Kong Observation Wheel TicketAqua Luna Victoria Harbour CruiseOcean Park Hong Kong TicketTurboJet Ferry Open Ticket (Hong Kong  Macau)Macau Tower AdmissionMacau Sightseeing Day Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004170236251587114385.jpg",

      date_time: "2020-04-17 14:36:25PM",
    },
    {
      id: "55",
      title: "Russia",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARDMoscow Hop-On Hop-Off City Sightseeing Bus TourMoscow Red Square and St. Basil’s Cathedral Private TourPanorama 360 Observation Deck Ticket in MoscowScenic River Cruise in MoscowPeterhof Palace Ticket in Saint PetersburgSaint Petersburg Hop-On Hop-Off City Sightseeing Bus Tour with Optional Canal Boat TourState Hermitage Museum Ticket in Saint PetersburgCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Russia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Russia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Britain SIM CARD",
      Itinerary_highlights:
        "Moscow Hop-On Hop-Off City Sightseeing Bus TourMoscow Red Square and St. Basil’s Cathedral Private TourPanorama 360 Observation Deck Ticket in MoscowScenic River Cruise in MoscowPeterhof Palace Ticket in Saint PetersburgSaint Petersburg Hop-On Hop-Off City Sightseeing Bus Tour with Optional Canal Boat TourState Hermitage Museum Ticket in Saint Petersburg",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004170311001587116460.jpg",

      date_time: "2020-04-17 14:58:19PM",
    },
    {
      id: "56",
      title: "Turkey ",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDIstanbul Classics TourBosphorus Bridge, Camlica Hill, and Dolmabahce Palace TourHistorical Cappadocia Red TourRed Valley Hiking and Underground City TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Turkey's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Turkeys available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Istanbul Classics TourBosphorus Bridge, Camlica Hill, and Dolmabahce Palace TourHistorical Cappadocia Red TourRed Valley Hiking and Underground City Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004170323181587117198.jpg",

      date_time: "2020-04-17 15:18:21PM",
    },
    {
      id: "57",
      title: "Turkey",
      sub_title: "7 Days / 6 Nights",
      short_description: "Istanbul & Cappadocia",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDIstanbul  Cappadocia ComboIstanbul Classics TourBosphorus Bridge, Camlica Hill, and Dolmabahce Palace TourHistorical Cappadocia Red TourRed Valley Hiking and Underground City TourPamukkale ActivitiesKusadasi ActivitiesCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Turkey's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Turkey's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Istanbul  Cappadocia ComboIstanbul Classics TourBosphorus Bridge, Camlica Hill, and Dolmabahce Palace TourHistorical Cappadocia Red TourRed Valley Hiking and Underground City TourPamukkale ActivitiesKusadasi Activities",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004170332121587117732.jpg",

      date_time: "2020-04-17 15:32:12PM",
    },
    {
      id: "29",
      title: "Dharamshala & Shimla",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Dharamshala (2N) Shimla(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Inclusions HotelAccommodation (3 Star or above)Dharamshala (2N) Shimla(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Dharamshala (2N) Shimla(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200136061574237166.jpg",

      date_time: "2019-10-29 16:21:51PM",
    },
    {
      id: "30",
      title: "Delhi, Agra & jaipur",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Delhi(1) Agra(1N)  Jaipur (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Delhi(1) Agra(1N)  Jaipur (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200132281574236948.jpg",

      date_time: "2019-10-29 16:22:54PM",
    },
    {
      id: "31",
      title: "Delhi & shimla",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Delhi (2N) Shimla(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Delhi (2N) Shimla(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200132161574236936.jpg",

      date_time: "2019-10-29 16:23:46PM",
    },
    {
      id: "32",
      title: "Dalhousie",
      sub_title: "4 Days / 3 Nights",
      short_description: "4 Days and 3 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (3N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "nclusions HotelAccommodation (3 Star or above)Dalhousie (3N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200137211574237241.jpg",

      date_time: "2019-10-29 16:24:29PM",
    },
    {
      id: "33",
      title: "Dalhousie & Dharmshala",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Dharmshala (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Dharmshala (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200131251574236885.jpg",

      date_time: "2019-10-29 16:26:12PM",
    },
    {
      id: "34",
      title: "Amritsar & Dalhousie",
      sub_title: "5 days / 4 Nights",
      short_description: "5 days / 4 Nights",
      description:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Amritsar(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeingas per your choiceComplete Sightseeinglist for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesExclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      additional_note:
        "Exclusions Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions HotelAccommodation (3 Star or above)Dalhousie (2N) Amritsar(2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 5 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation PolicyCancellation any time after making the 1st payment instalment till the 2nd payment date.The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.Cancellation after 2nd payment instalment and before 3rd or final payment date.The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.Cancellation after 3rd or final payment date.The full amount paid by you would be non-refundable.",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200131121574236872.jpg",

      date_time: "2019-10-29 16:26:52PM",
    },
    {
      id: "35",
      title: "Agra & Jaipur",
      sub_title: "4 Days / 3 Nights",
      short_description: "4 Days and 3 Nights",
      description:
        "Inclusions:HotelAccommodation (3 Star or above)Agra(1N)  Jaipur (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesbrstrongExclusions:Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      additional_note:
        "Exclusions:Lunches  Dinner (if any) based on the itineraryTips, porterage, laundry and phone callsSightseeing Activities on daily basisAny service not mentioned with the inclusionsAny City Taxes charged by hotel on daily basis during you stayAny personal expenses – Mini Bar at the Hotel, Room service etc.",
      tour_Inclusions:
        "Inclusions:HotelAccommodation (3 Star or above)Agra(1N)  Jaipur (2N)Daily Breakfast  DinnerFlight Tickets + Baggage (onward  return)Airport Transfers (Round trip)Private Taxi on rent for 4 days (Airport Pick - Airport Drop)Sightseeing's  as per your choiceComplete Sightseeing's  list for all destinations will be provided after tour confirmationActivities suggestions will be providedLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      int_dom: "2",
      region_id: "1",
      country_id: "1",
      destination_id: "1",
      image: "201911200130571574236857.jpg",

      date_time: "2019-10-29 16:27:39PM",
    },
    {
      id: "58",
      title: "Australia",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDSydney  Melbourne ComboMelbourne Star Observation Wheel TicketSea Life Melbourne Aquarium Entry TicketGreat Ocean Road Day Tour from MelbourneMelbourne City SightseeingSydney Whale Watching Cruise by Captain CookSydney Opera House Guided Walking TourBlue Mountains and Wildlife Day Tour from SydneySydney Tower Eye Observation Deck Skip-the-Line Entry TicketSydney Harbour Highlights CruiseCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Australia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Australia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Sydney  Melbourne ComboMelbourne Star Observation Wheel TicketSea Life Melbourne Aquarium Entry TicketGreat Ocean Road Day Tour from MelbourneMelbourne City SightseeingSydney Whale Watching Cruise by Captain CookSydney Opera House Guided Walking TourBlue Mountains and Wildlife Day Tour from SydneySydney Tower Eye Observation Deck Skip-the-Line Entry TicketSydney Harbour Highlights Cruise",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004180330551587204055.jpg",

      date_time: "2020-04-18 15:30:55PM",
    },
    {
      id: "37",
      title: "Dubai",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Inclusions : Hotel Accommodation (3 Star & above) Daily Breakfast + Taxes Included Flight Tickets + Baggage* (onward & return) - any city Round trip Airport transfers on pvt basis Visa Embassy & Processing Fee Burj Khalifa 124th & 125th Floor Entry Dinner in Dhow Cruise & Desert Safar Entrance Ticket to Underwater Aquarium & Zoo Entrance Ticket for Atlantis AquaPark Group Transfers for all tours (Private can be arranged on request) Activities with Transfers Local Restaurants suggestions will be provided All day Support until you complete your tour Weather Report for your travel dates Complimentary, SIM CARDTour Exclusions  Lunches & Dinner (if any) based on the itinerary Overseas Travel Insurance Tips, porterage, laundry and phone calls Any service not mentioned with the inclusions Any personal expenses City Tax if any collected by Hotel Mini Bar at the Hotel, Room service etc Transfers for Atlantis/Burj Khalifa (Check with Planning Team) Entry Tickets apart from which is not mentioned in the InclusionsSightseeing Activities  Dubai City Tour (Half Day) Burj Khalifa 124, 125th Floor Access - (Half Day) Underwater Aquarium & Zoo Abu Dhabi City Tour with Ferrari World - (Full Day) Atlantis Aquapark & Lost Chamber - (Full Day) Desert Safari Sunset Tour with Dinner - (Evening Tour) Dhow Cruise with Dinner - (Evening Tour)Note  This Itinerary is displayed to give an Idea about Dubaiavailable tours and you can include any Sightseeing options of your choice. Get in touch with our planning team to get your own personalised tour plan for Dubai. Looking forward to hear from you !! Important Notice  If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!Cancellation Policy  Cancellation any time after making the 1st payment instalment till the 2nd payment date. The entire amount paid as 1st payment instalment (deposit) would be nonrefundable. Cancellation after 2nd payment instalment and before 3rd or final payment date. The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable. Cancellation after 3rd or final payment date. The full amount paid by you would be non-refundable.FREQUENTLY ASKED QUESTIONS/a's  Best time to Visit Dubai ?/a's The best time to visit Dubai is during the winter months, from's November to April. January and February see heavy tourist traffic's because of the Dubai Shopping Festival, which makes the city come's alive.'s Do i need a Visa to enter Dubai ?/a's /'s Yes, you need to apply for Visa and we will process it's  What is the Currency used in Dubai ?/a's /'s AED is used in Dubai and its the only accepted. Approximate value for 1 AED = Rs.19-20's  Will someone from your team assist us ?/a's /'s Yes, we have a Ground Team in Dubai who is well versed with local locations. They will be assisting you right from your Airport Pick up till Airport Drop 'sHow many days is Ideal for Dubai ?/a's /'s You need a minimum of 5 Days Stay for Dubai to touch down every important places.'s \t\t\t\t\t\t\t's \t\t\t\t\t\t's \t\t\t\t\t's \t\t\t\t\t's \t\t\t\t's \t\t\t's \t\t's \t's \t's ",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "201912040542261575461546.jpg",

      date_time: "2019-12-04 16:55:15PM",
      status: "1",
    },
    {
      id: "38",
      title: "Bali",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Inclusions:Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)South Bali Stay (2N)North Bali Stay (2N) - Private Pool Villa (Preferred for Couples)Lunch/Dinner (As per the Itinerary)Entrance Ticket to Bali SwingPrivate Taxi for all your Transfers (No Group, Except Island Tour)No Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Indonesian SIM CARDbrstrongSouth Bali Tour (10Hrs - Full Day in Private Car)North Bali Tour (10Hrs - Full Day in Private Car)Bali Swing with Entrance FeeRiver Rafting with Lunch (Half Day)Sea Walking with Lunch (Half Day)brCancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Note:This Itinerary is displayed to give an Idea about Bali's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bali. Looking forward to hear from you !! :)",
      additional_note:
        "Note:This Itinerary is displayed to give an Idea about Bali's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bali. Looking forward to hear from you !! :)br",
      tour_Inclusions:
        "Inclusions:Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)South Bali Stay (2N)North Bali Stay (2N) - Private Pool Villa (Preferred for Couples)Lunch/Dinner (As per the Itinerary)Entrance Ticket to Bali SwingPrivate Taxi for all your Transfers (No Group, Except Island Tour)No Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Indonesian SIM CARD",
      Itinerary_highlights: "",
      cancellation_policy:
        "South Bali Tour (10Hrs - Full Day in Private Car)North Bali Tour (10Hrs - Full Day in Private Car)Bali Swing with Entrance FeeRiver Rafting with Lunch (Half Day)Sea Walking with Lunch (Half Day)",

      image: "202004170238511587114531.jpg",

      date_time: "2019-12-04 17:09:51PM",
    },
    {
      id: "62",
      title: "Vietnam",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Internal Flight Fare (One Way)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)VISA ChargesEntrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDHanoi, Halong Bay  DaNangHalong Bay Day Cruise Stay (1 Night/2 Day - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Hanoi Local City TourVisit Golden BridgeBaNa Hills TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Internal Flight Fare (One Way)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)VISA ChargesEntrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Hanoi, Halong Bay  DaNangHalong Bay Day Cruise Stay (1 Night/2 Day - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Hanoi Local City TourVisit Golden BridgeBaNa Hills Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004211017501587444470.jpg",

      date_time: "2020-04-21 10:17:50AM",
    },
    {
      id: "63",
      title: "Vietnam",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA ChargesLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDHanoi, Halong Bay, DaNang, Hoi An  Ho Chi MinhHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Majestic Tran An TourHanoi Local City TourBaNa Hills  Golden Bridge TourHoi An Local TourChu Chi Tunnels TourCultural Evening Tour with Water Puppet ShowCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA ChargesLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Hanoi, Halong Bay, DaNang, Hoi An  Ho Chi MinhHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Majestic Tran An TourHanoi Local City TourBaNa Hills  Golden Bridge TourHoi An Local TourChu Chi Tunnels TourCultural Evening Tour with Water Puppet Show",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004211024131587444853.jpg",

      date_time: "2020-04-21 10:24:13AM",
    },
    {
      id: "39",
      title: "Bali",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Inclusions:Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)South Bali Stay (5N)Lunch/Dinner (As per the Itinerary)Entrance Ticket to Bali SwingPrivate Taxi for all your Transfers (No Group, Except Island Tour)No Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Indonesian SIM CARDbrstrongSouth Bali Tour (10Hrs - Full Day in Private Car)North Bali Tour (10Hrs - Full Day in Private Car)Bali Swing with Entrance FeeRiver Rafting with Lunch (Half Day)Sea Walking with Lunch (Half Day)Bali Safari Park with Entrance Fee  TransferNusa Penida Tour (Full Day) with Snorkelling (West/East/South) Select any Nusa Island of your ChoiceCancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Note:This Itinerary is displayed to give an Idea about Bali's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bali. Looking forward to hear from you !! :)",
      additional_note: "",
      tour_Inclusions:
        "Inclusions:Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)South Bali Stay (5N)Lunch/Dinner (As per the Itinerary)Entrance Ticket to Bali SwingPrivate Taxi for all your Transfers (No Group, Except Island Tour)No Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Indonesian SIM CARD",
      Itinerary_highlights:
        "South Bali Tour (10Hrs - Full Day in Private Car)North Bali Tour (10Hrs - Full Day in Private Car)Bali Swing with Entrance FeeRiver Rafting with Lunch (Half Day)Sea Walking with Lunch (Half Day)Bali Safari Park with Entrance Fee  TransferNusa Penida Tour (Full Day) with Snorkelling (West/East/South) Select any Nusa Island of your Choice",
      cancellation_policy:
        "Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Note:This Itinerary is displayed to give an Idea about Bali's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bali. Looking forward to hear from you !! :)",

      image: "202004170239281587114568.jpg",

      date_time: "2019-12-04 17:12:31PM",
    },
    {
      id: "60",
      title: "Vietnam ",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDHanoi  Halong BayHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Hanoi Local City Tour (7hrs - Join in/Private Tour, Hotel Pickup and Drop)Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Hanoi  Halong BayHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Hanoi Local City Tour (7hrs - Join in/Private Tour, Hotel Pickup and Drop)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004200528551587383935.jpg",

      date_time: "2020-04-20 17:21:53PM",
    },
    {
      id: "61",
      title: "Vietnam",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaVISA ChargesLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDHanoi  SaPaHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Sunworld Fansipan Legend Admission TicketLove and Silver Waterfalls Day Tour from Sapa (5Hrs - Pickup and Drop)Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaVISA ChargesLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Hanoi  SaPaHalong Bay Day Tour (12hrs - Join in Tour, Hotel Pickup and Drop)Hoa Lu - Tam Coc Day Tour (10hrs - Join in Tour, Hotel Pickup and Drop)Sunworld Fansipan Legend Admission TicketLove and Silver Waterfalls Day Tour from Sapa (5Hrs - Pickup and Drop)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004220545431587557743.jpg",

      date_time: "2020-04-20 17:33:38PM",
    },
    {
      id: "40",
      title: "Bali",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description: "",
      additional_note:
        "Note:This Itinerary is displayed to give an Idea about Bali's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bali. Looking forward to hear from you !! :)",
      tour_Inclusions:
        "Inclusions:Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)South Bali Stay (5N)North Bali Stay (2N) - Private Pool Villa (Preferred for Couples)Lunch/Dinner (As per the Itinerary)Entrance Ticket to Bali SwingPrivate Taxi for all your Transfers (No Group, Except Island Tour)No Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Indonesian SIM CARD",
      Itinerary_highlights:
        "South Bali Tour (10Hrs - Full Day in Private Car)North Bali Tour (10Hrs - Full Day in Private Car)Bali Swing with Entrance FeeWaterfall Tour with Entrance Fee  TransfersRiver Rafting with Lunch (Half Day)Nusa Penida Tour (Full Day) with Snorkelling (West/East/South) Select any Nusa Island of your Choice",
      cancellation_policy:
        "Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      int_dom: "1",
      region_id: "0",
      country_id: "0",
      destination_id: "0",
      image: "202004170240431587114643.jpg",

      date_time: "2019-12-04 17:19:32PM",
    },
    {
      id: "59",
      title: "Australia",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDSydney, Gold Coast  Melbourne ComboMelbourne Star Observation Wheel TicketSea Life Melbourne Aquarium Entry TicketGreat Ocean Road Day Tour from MelbourneMelbourne City SightseeingGold Coast Sea World Entry TicketSkyPoint Observatory Deck Entry Ticket in Gold Coast (304412 East)Kuranda Skyrail and Scenic Rail Day Trip with Hotel Pick Up from CairnsGreen Island Full Day Discovery Cruise by Great Adventures CruiseSydney Opera House Guided Walking TourBlue Mountains and Wildlife Day Tour from SydneySydney Harbour Highlights CruiseCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Australia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Australia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Sydney, Gold Coast  Melbourne ComboMelbourne Star Observation Wheel TicketSea Life Melbourne Aquarium Entry TicketGreat Ocean Road Day Tour from MelbourneMelbourne City SightseeingGold Coast Sea World Entry TicketSkyPoint Observatory Deck Entry Ticket in Gold Coast (304412 East)Kuranda Skyrail and Scenic Rail Day Trip with Hotel Pick Up from CairnsGreen Island Full Day Discovery Cruise by Great Adventures CruiseSydney Opera House Guided Walking TourBlue Mountains and Wildlife Day Tour from SydneySydney Harbour Highlights Cruise",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004180351291587205289.jpg",

      date_time: "2020-04-18 15:51:29PM",
    },
    {
      id: "41",
      title: "Bali",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "      Inclusions : Hotel Accommodation (4 Star & above) Daily Breakfast   Flight Fare (Both Ways)   Airport Transfers (Round trip)   South Bali Stay (5N)   North Bali Stay (2N) - Private Pool Villa (Preferred for Couples)   Lunch/Dinner (As per the Itinerary)   Entrance Ticket to Bali Swing   Private Taxi for all your Transfers (No Group, Except Island Tour)   No Fixed Itinerary, Sightseeingas per your choice   Activities with Transfers   Local Restaurants suggestions will be provided   All day Support until you complete your tour   Weather Report for your travel dates   Complimentary, Indonesian SIM CARD Sightseeing Activities : South Bali Tour (10Hrs - Full Day in Private Car)   North Bali Tour (10Hrs - Full Day in Private Car)   Bali Swing with Entrance Fee   River Rafting with Lunch (Half Day)   Nusa Lembongan Island Tour (Full Day) with Snorkelling   Bali Safari Park Entrance with TransferCancellation Policy  Cancellation any time after making the 1st payment instalment till the 2nd payment date.   The entire amount paid as 1st payment instalment (deposit) would be nonrefundable.   Cancellation after 2nd payment instalment and before 3rd or final payment date.   The total amount that was due at the 2nd payment instalment as per your payment schedule would be non-refundable; anything that you have paid over and above this amount would be refundable.   Cancellation after 3rd or final payment date.   The full amount paid by you would be non-refundable.",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "201912040536271575461187.jpg",

      date_time: "2019-12-04 17:21:07PM",
      status: "1",
    },
    {
      id: "42",
      title: "Dubai",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Inclusions:Hotel Accommodation (3 Star  above)Daily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisVisa Embassy  Processing FeeBurj Khalifa 124th  125th Floor EntryDinner in Dhow Cruise  Desert SafarEntrance Ticket to Underwater Aquarium  ZooGroup Transfers for all tours (Private can be arranged on request)Activities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, SIM CARDDubai City Tour (Half Day)Burj Khalifa 124, 125th Floor Access - (Half Day)Underwater Aquarium  ZooAbu Dhabi City Tour with Ferrari World - (Full Day)Desert Safari Sunset Tour with Dinner - (Evening Tour)Dhow Cruise with Dinner - (Evening Tour)Note:This Itinerary is displayed to give an Idea about Dubai's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to get your own personalised tour plan for Dubai. Looking forward to hear from you !! :)Important Notice:If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!brCancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !br",
      additional_note:
        "Important Notice:If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!Note:This Itinerary is displayed to give an Idea about Dubai's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to get your own personalised tour plan for Dubai. Looking forward to hear from you",
      tour_Inclusions:
        "Inclusions:Hotel Accommodation (3 Star  above)Daily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisVisa Embassy  Processing FeeBurj Khalifa 124th  125th Floor EntryDinner in Dhow Cruise  Desert SafarEntrance Ticket to Underwater Aquarium  ZooGroup Transfers for all tours (Private can be arranged on request)Activities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, SIM CARD",
      Itinerary_highlights: "",
      cancellation_policy:
        "Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "201912040542201575461540.jpg",

      date_time: "2019-12-04 16:46:01PM",
    },
    {
      id: "67",
      title: "Maldives",
      sub_title: "4 Days / 3 Nights",
      short_description: "4 Days / 3 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - Beach Resort CategoryDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesLeisure, Island Hopping, Submarine TourSnorkelling with Sandbank visitSubmarine TourMale Local City TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - Beach Resort CategoryDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights:
        "Leisure, Island Hopping, Submarine TourSnorkelling with Sandbank visitSubmarine TourMale Local City Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004250807301587825450.jpg",

      date_time: "2020-04-25 20:07:30PM",
    },
    {
      id: "68",
      title: "Maldives",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - Beach Resort CategoryDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesLeisure, Island Hopping, Submarine TourSnorkelling with Sandbank visitSubmarine TourMale Local City TourOne Night Stay in Maafushi Island strong(or)/strong Island Resort Visit (Cruise Transfers with Pick up, Drop  Lunch)Additional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - Beach Resort CategoryDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights:
        "Leisure, Island Hopping, Submarine TourSnorkelling with Sandbank visitSubmarine TourMale Local City TourOne Night Stay in Maafushi Island strong(or)/strong Island Resort Visit (Cruise Transfers with Pick up, Drop  Lunch)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004250850311587828031.jpeg",

      date_time: "2020-04-25 20:35:23PM",
    },
    {
      id: "69",
      title: "Maldives",
      sub_title: "4 Days / 3 Nights",
      short_description: "4 Days / 3 Nights",
      description:
        "Tour Inclusions:Island ResortAccommodation (5 Star  above) - Island Resort CategoryMeal Plan (As per your travel requirements)Flight Fare (Both Ways)Airport Sea Transfers (Round trip)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesRoom Type will be planned as per your preferences/blockquoteulWater Based Activities Within IslandRoom Combination :ulBeach Villa 2N / Water Villa 1NBeach Villa 1N / Water Villa 2 NBeach Villa 3NWater Villa 3NAdditional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Maldives available tours and you can include any Sightseeing options of your choice.Maldives has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:Island ResortAccommodation (5 Star  above) - Island Resort CategoryMeal Plan (As per your travel requirements)Flight Fare (Both Ways)Airport Sea Transfers (Round trip)Entrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldates",
      Itinerary_highlights:
        "Room Type will be planned as per your preferences/blockquoteulWater Based Activities Within IslandRoom Combination :ulBeach Villa 2N / Water Villa 1NBeach Villa 1N / Water Villa 2 NBeach Villa 3NWater Villa 3N",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004250856071587828367.jpg",

      date_time: "2020-04-25 20:56:07PM",
    },
    {
      id: "43",
      title: "Dubai",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Inclusions:Hotel Accommodation (3 Star  above)Daily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisVisa Embassy  Processing FeeBurj Khalifa 124th  125th Floor EntryDinner in Dhow Cruise  Desert SafarEntrance Ticket to Underwater Aquarium  ZooEntrance Ticket for Atlantis AquaParkGroup Transfers for all tours (Private can be arranged on request)Activities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, SIM CARDDubai City Tour (Half Day)Burj Khalifa 124, 125th Floor Access - (Half Day)Underwater Aquarium  ZooAbu Dhabi City Tour with Ferrari World - (Full Day)Atlantis Aquapark  Lost Chamber - (Full Day)Desert Safari Sunset Tour with Dinner - (Evening Tour)Dhow Cruise with Dinner - (Evening Tour)Global Village Tour - (Evening Tour)Note:This Itinerary is displayed to give an Idea about Dubai's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to get your own personalised tour plan for Dubai. Looking forward to hear from you !! :)Important Notice:If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!brCancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      additional_note:
        "Important Notice:If you are group of 5 or more people, we can arrange Private Transfer in the same cost as Group Tours. Get in touch with our planning team to know more !!br",
      tour_Inclusions:
        "Inclusions:Hotel Accommodation (3 Star  above)Daily Breakfast + Taxes IncludedFlight Tickets + Baggage* (onward  return) - any cityRound trip Airport transfers on pvt basisVisa Embassy  Processing FeeBurj Khalifa 124th  125th Floor EntryDinner in Dhow Cruise  Desert SafarEntrance Ticket to Underwater Aquarium  ZooEntrance Ticket for Atlantis AquaParkGroup Transfers for all tours (Private can be arranged on request)Activities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, SIM CARD",
      Itinerary_highlights:
        "Dubai City Tour (Half Day)Burj Khalifa 124, 125th Floor Access - (Half Day)Underwater Aquarium  ZooAbu Dhabi City Tour with Ferrari World - (Full Day)Atlantis Aquapark  Lost Chamber - (Full Day)Desert Safari Sunset Tour with Dinner - (Evening Tour)Dhow Cruise with Dinner - (Evening Tour)Global Village Tour - (Evening Tour)",
      cancellation_policy:
        "Cancellation Policy:Cancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "201912040542261575461546.jpg",

      date_time: "2019-12-04 16:55:15PM",
    },
    {
      id: "64",
      title: "Thailand",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDPhuket  BangkokPhuket City Sightseeing day tourRacha  Coral Island Tour (Full Day with Lunch, Pick Up  Drop)Phi Phi  Maya Bay Island Tour (Full Day with Lunch, Pick Up  Drop)Local Bangkok City TourSea Life BangkokCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Phuket  BangkokPhuket City Sightseeing day tourRacha  Coral Island Tour (Full Day with Lunch, Pick Up  Drop)Phi Phi  Maya Bay Island Tour (Full Day with Lunch, Pick Up  Drop)Local Bangkok City TourSea Life Bangkok",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004220429061587553146.jpg",

      date_time: "2020-04-22 16:29:06PM",
    },
    {
      id: "65",
      title: "Thailand ",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDBangkok  PattayaSafari World Bangkok (Full Day Tour with Lunch)Local Bangkok City TourCoral Island Tour (Full Day Tour with Lunch, Pick Up  Drop)Noong Nooch Tropical Garden Tour / Tiger Kingdom TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Bangkok  PattayaSafari World Bangkok (Full Day Tour with Lunch)Local Bangkok City TourCoral Island Tour (Full Day Tour with Lunch, Pick Up  Drop)Noong Nooch Tropical Garden Tour / Tiger Kingdom Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004220537411587557261.jpg",

      date_time: "2020-04-22 17:37:41PM",
    },
    {
      id: "66",
      title: "Thailand ",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 NIghts",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDPhuket, Bangkok  PattayaPhi Phi Island  Maya Bay Tour (Full Day Tour with Lunch, Pick Up  Drop)Phuket Local City TourKrabi Islands Tour (Full Day Tour with Lunch, Pick Up  Drop)Safari World Bangkok (Full Day Tour with Lunch)Local Bangkok City TourCoral Island Tour (Full Day Tour with Lunch, Pick Up  Drop)Noong Nooch Tropical Garden Tour / Tiger Kingdom TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above) - As you PreferDaily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Round Trip Bus Tickets Hanoi - SaPaLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in plan6 Sets of Recommendations (Food Joint, Route Plans, Weather Forecast etc.. )All tours are shared / groupVISA on ArrivalLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Phuket, Bangkok  PattayaPhi Phi Island  Maya Bay Tour (Full Day Tour with Lunch, Pick Up  Drop)Phuket Local City TourKrabi Islands Tour (Full Day Tour with Lunch, Pick Up  Drop)Safari World Bangkok (Full Day Tour with Lunch)Local Bangkok City TourCoral Island Tour (Full Day Tour with Lunch, Pick Up  Drop)Noong Nooch Tropical Garden Tour / Tiger Kingdom Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004220606471587559007.jpeg",

      date_time: "2020-04-22 18:02:05PM",
    },
    {
      id: "44",
      title: "Bhutan",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour InclusionsHotel Accommodation (4 Star & above)'s  Daily Breakfast's Flight Fare (Both Ways)'s Airport Transfers (Round trip)'s Lunch/Dinner (As per the Itinerary)'s Entrance Ticket to sightseeing (if any) mentioned in plan No Fixed Itinerary, Sightseeings as per your choice's All tours are shared / group / on pvt basis Local Restaurants suggestions will be provided All day Support until you complete your tour Weather Report for your travel dates Complimentary, Bhutan SIM CARD",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "202003210256101584782770.jpg",

      date_time: "2020-03-21 14:56:10PM",
      status: "1",
    },
    {
      id: "45",
      title: "Bhutan",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "InclusionsHotel Accommodation (3, 4 Star  above)Daily Breakfast  DinnerFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planNo Fixed Itinerary, Sightseeing's  as per your choiceAll tours are on Private basisLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel dates Complimentary,Taking you around ThimphuPunakaParoCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Bhutan's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bhutan. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Bhutan's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Bhutan. Looking forward to hear from you !!",
      tour_Inclusions:
        "InclusionsHotel Accommodation (3, 4 Star  above)Daily Breakfast  DinnerFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planNo Fixed Itinerary, Sightseeing's  as per your choiceAll tours are on Private basisLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel dates Complimentary,",
      Itinerary_highlights: "Taking you around ThimphuPunakaParo",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202003240114131585035853.jpg",

      date_time: "2020-03-24 12:12:12PM",
    },
    {
      id: "46",
      title: "TEST",
      sub_title: "TEST",
      short_description: "TEST",
      description: "TESTTESTTESTTESTvTEST",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "202003240120491585036249.jpg",

      date_time: "2020-03-24 13:20:49PM",
      status: "1",
    },
    {
      id: "70",
      title: "France & Switzerland",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Paris - 3 NightsSwitzerland - 3 NightsLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Eiffel Tour, Disney Land, Swiss AlpsEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightMt. Titlis with Cable Car (10hrs)Grindelwald  Interlaken (Zurich Departure) (12hrs)Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Paris - 3 NightsSwitzerland - 3 NightsLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Eiffel Tour, Disney Land, Swiss AlpsEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightMt. Titlis with Cable Car (10hrs)Grindelwald  Interlaken (Zurich Departure) (12hrs)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004281032411588093361.jpg",
    },
    {
      id: "72",
      title: "France, Netherlands & Switzerland",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions:Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Paris - 3 NightsAmsterdam - 3 NightsSwitzerland - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDistrongEiffel Tower, Disney Land, Keukenhof Gardens  Swiss Alps/strong/i/blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseMt. Titlis with Cable Car (10hrs)Half Day Tour to Rhine Falls and Stein am RheinGrindelwald  Interlaken (Zurich Departure) (12hrs)Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Paris - 3 NightsAmsterdam - 3 NightsSwitzerland - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "istrongEiffel Tower, Disney Land, Keukenhof Gardens  Swiss Alps/strong/i/blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseMt. Titlis with Cable Car (10hrs)Half Day Tour to Rhine Falls and Stein am RheinGrindelwald  Interlaken (Zurich Departure) (12hrs)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005021059071588397347.jpg",

      date_time: "2020-05-02 10:41:50AM",
    },
    {
      id: "71",
      title: "France & Netherlands",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Paris - 3 NightsAmsterdam - 3 NightsLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :strongEiffel Tour, Disney Land, Keukenhof Gardens, Rijksmuseum/strong//blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseVolendam, Edam, and Zaanse Schans Windmill Village Day Tour from AmsterdamCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Paris - 3 NightsAmsterdam - 3 NightsLunch/Dinner (As per the Itinerary)Entrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :strongEiffel Tour, Disney Land, Keukenhof Gardens, Rijksmuseum/strong//blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseVolendam, Edam, and Zaanse Schans Windmill Village Day Tour from Amsterdam",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202004290802561588170776.jpg",

      date_time: "2020-04-29 20:02:56PM",
    },
    {
      id: "73",
      title: "Spain and France",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days /  7 Nights",
      description:
        "Tour Inclusions:Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Paris - 4 NightsBarcelona - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDEiffel Tower, Disney Land and Barcelona/strong//blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightFlamenco Show at Tablao Flamenco Cordobes BarcelonaCasa Batlló Entry Ticket in BarcelonaPark Güell Ticket in BarcelonaSagrada Familia Guided Tour and Fast Track Access by Amigo ToursCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Paris - 4 NightsBarcelona - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Eiffel Tower, Disney Land and Barcelona/strong//blockquoteulEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightFlamenco Show at Tablao Flamenco Cordobes BarcelonaCasa Batlló Entry Ticket in BarcelonaPark Güell Ticket in BarcelonaSagrada Familia Guided Tour and Fast Track Access by Amigo Tours",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005021210131588401613.jpg",

      date_time: "2020-05-02 12:06:57PM",
    },
    {
      id: "74",
      title: "Spain, Switzerland and Austria",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trips)Lunch/Dinner (As per the Itinerary)Barcelona - 3 NightsSwitzerland - 3 NightsAustria - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Barcelona, Swiss Alps and ViennaFlamenco Show at Tablao Flamenco Cordobes BarcelonaCasa Batlló Entry Ticket in BarcelonaPark Güell Ticket in BarcelonaSagrada Familia Guided Tour and Fast Track Access by Amigo ToursMt. Titlis with Cable Car (10hrs)Half Day Tour to Rhine Falls and Stein am RheinGrindelwald  Interlaken (Zurich Departure) (12hrs)Evening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trips)Lunch/Dinner (As per the Itinerary)Barcelona - 3 NightsSwitzerland - 3 NightsAustria - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Barcelona, Swiss Alps and ViennaFlamenco Show at Tablao Flamenco Cordobes BarcelonaCasa Batlló Entry Ticket in BarcelonaPark Güell Ticket in BarcelonaSagrada Familia Guided Tour and Fast Track Access by Amigo ToursMt. Titlis with Cable Car (10hrs)Half Day Tour to Rhine Falls and Stein am RheinGrindelwald  Interlaken (Zurich Departure) (12hrs)Evening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005020200481588408248.jpg",

      date_time: "2020-05-02 14:00:48PM",
    },
    {
      id: "75",
      title: "London, France and Netherlands",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)London - 3 NightsAmsterdam - 3 NightsParis - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDItinerary HighlightsStonehenge, London Tower, Eiffel Tower, Keukenhof Gardens,RijksmuseumStonehenge, Windsor Castle, and Bath Day Tour from LondonLondon Sightseeing Day Tour with Changing of the GuardHarry Potter Film Locations Walking TourLondon Eye TicketEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseVolendam, Edam, and Zaanse Schans Windmill Village Day Tour from AmsterdamCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!brbr",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)London - 3 NightsAmsterdam - 3 NightsParis - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Itinerary HighlightsStonehenge, London Tower, Eiffel Tower, Keukenhof Gardens,RijksmuseumStonehenge, Windsor Castle, and Bath Day Tour from LondonLondon Sightseeing Day Tour with Changing of the GuardHarry Potter Film Locations Walking TourLondon Eye TicketEiffel Tower Upto to Summit (All 3 Floors)Paris City Tour + Seine River Cruise (2 Day Pass)Disney Land 1 Day pass to 1 ParkParis Illumination Tour @NightCountryside  Windmills Tour from AmsterdamKeukenhof Entrance Ticket and Bus Transfer (when season permits)Rijksmuseum + 1 hr Canal CruiseVolendam, Edam, and Zaanse Schans Windmill Village Day Tour from Amsterdam",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005020438001588417680.jpg",

      date_time: "2020-05-02 16:16:07PM",
    },
    {
      id: "76",
      title: "Austria and Croatia",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days /  7 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Austria - 3 NightsCroatia - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, European SIM CARDVienna and ZagrebEvening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)Zagreb Walking Tour and a Visit to the Museum of Broken RelationshipsLjubljana and Lake Bled Whole Day Tour from ZagrebPlitvice Lakes National Park and Rastoke Day Tour from ZagrebCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Austria - 3 NightsCroatia - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, European SIM CARD",
      Itinerary_highlights:
        "Vienna and ZagrebEvening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)Zagreb Walking Tour and a Visit to the Museum of Broken RelationshipsLjubljana and Lake Bled Whole Day Tour from ZagrebPlitvice Lakes National Park and Rastoke Day Tour from Zagreb",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005020524261588420466.jpg",

      date_time: "2020-05-02 17:24:26PM",
    },
    {
      id: "77",
      title: "Switzerland and Italy",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Switzerland - 4 NightsItaly - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Rhine Falls, Junfraujoch, Vatican, Rome,Mt. Titlis with Cable Car (10hrs)Grindelwald  Interlaken (Zurich Departure) (12hrs)Half Day Tour to Rhine Falls and Stein am RheinJungfraujoch Day Tour from ZurichVatican Museums, Sistine Chapel, and St. Peter’s Basilica TourCapri Island with Blue Grotto Excursion from RomeColosseum, Roman Forum, and Palatine Hill TourDoge's  Palace and Saint Mark's  Basilica Guided Tour with Fast Track AdmissionMurano, Burano, and Torcello Day TripCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Switzerland - 4 NightsItaly - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Rhine Falls, Junfraujoch, Vatican, Rome,Mt. Titlis with Cable Car (10hrs)Grindelwald  Interlaken (Zurich Departure) (12hrs)Half Day Tour to Rhine Falls and Stein am RheinJungfraujoch Day Tour from ZurichVatican Museums, Sistine Chapel, and St. Peter’s Basilica TourCapri Island with Blue Grotto Excursion from RomeColosseum, Roman Forum, and Palatine Hill TourDoge's  Palace and Saint Mark's  Basilica Guided Tour with Fast Track AdmissionMurano, Burano, and Torcello Day Trip",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005020737331588428453.jpg",

      date_time: "2020-05-02 19:37:33PM",
    },
    {
      id: "78",
      title: "Switzerland and Italy",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Switzerland - 4 NightsItaly - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Rhine Falls, Junfraujoch, Vatican, Rome,Mt. Titlis with Cable Car (10hrs)Grindelwald  Interlaken (Zurich Departure) (12hrs)Half Day Tour to Rhine Falls and Stein am RheinJungfraujoch Day Tour from ZurichVatican Museums, Sistine Chapel, and St. Peter’s Basilica TourCapri Island with Blue Grotto Excursion from RomeColosseum, Roman Forum, and Palatine Hill TourDoge's  Palace and Saint Mark's  Basilica Guided Tour with Fast Track AdmissionMurano, Burano, and Torcello Day TripCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!br data-cke-filler=\"true\"/",
      additional_note: "",
      tour_Inclusions: "",
      Itinerary_highlights: "",
      cancellation_policy: "",

      image: "202005020737561588428476.jpg",

      date_time: "2020-05-02 19:37:56PM",
      status: "1",
    },
    {
      id: "79",
      title: "Italy",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days /  7 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Italy - 7 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Vatican, Colosseum, St.Mark's  Basilica, Pisa TowerVatican Museums, Sistine Chapel, and St. Peter’s Basilica TourCapri Island with Blue Grotto Excursion from RomeColosseum, Roman Forum, and Palatine Hill TourDoge's  Palace and Saint Mark's  Basilica Guided Tour with Fast Track AdmissionMurano, Burano, and Torcello Day TripTuscany Day Tour with Lunch from FlorenceAccademia Gallery Guided Tour with Skip-the-Line TicketPisa Half Day Tour from FlorenceCinque Terre Day Trip from FlorenceCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Italy - 7 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Vatican, Colosseum, St.Mark's  Basilica, Pisa TowerVatican Museums, Sistine Chapel, and St. Peter’s Basilica TourCapri Island with Blue Grotto Excursion from RomeColosseum, Roman Forum, and Palatine Hill TourDoge's  Palace and Saint Mark's  Basilica Guided Tour with Fast Track AdmissionMurano, Burano, and Torcello Day TripTuscany Day Tour with Lunch from FlorenceAccademia Gallery Guided Tour with Skip-the-Line TicketPisa Half Day Tour from FlorenceCinque Terre Day Trip from Florence",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005020807321588430252.jpg",

      date_time: "2020-05-02 20:07:32PM",
    },
    {
      id: "80",
      title: "Austria and Hungary",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days /  7 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Austria - 4 NightsBudapest - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Salzburg, Vienna, Danube River, BudapestEvening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)Evening Sightseeing Cruise on the Danube River in BudapestBudapest Big Bus Open-Top Hop-On Hop-Off ToursBudapest Grand City Tour with Entry to ParliamentCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Austria - 4 NightsBudapest - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Salzburg, Vienna, Danube River, BudapestEvening Boat Cruise with Viennese Music TourSchönbrunn Palace Concert in ViennaSalzburg Full Day Tour from ViennaVienna Big Bus Hop-On Hop-Off Tours (Open-Top)Evening Sightseeing Cruise on the Danube River in BudapestBudapest Big Bus Open-Top Hop-On Hop-Off ToursBudapest Grand City Tour with Entry to Parliament",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005041120131588571413.jpg",

      date_time: "2020-05-04 11:12:51AM",
    },
    {
      id: "81",
      title: "Switzerland  and Norway",
      sub_title: "11 Days / 10 Nights",
      short_description: "11 Days /  10 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Switzerland - 5 NightsNorway - 5 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARDItinerary Highlights :Swiss Alps, Zurich, Northern LightsMt.Titlis Tour with Cable Car RideInterlaken  Grindlewald TourRhine Falls  Zurich City TourAurora Husky VisitHop On Bus Pass in Oslo - 1 DayAurora Camp and Husky Sledding Ride ExperienceCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Europe's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for Europe. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Switzerland - 5 NightsNorway - 5 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Europe SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Swiss Alps, Zurich, Northern LightsMt.Titlis Tour with Cable Car RideInterlaken  Grindlewald TourRhine Falls  Zurich City TourAurora Husky VisitHop On Bus Pass in Oslo - 1 DayAurora Camp and Husky Sledding Ride Experience/",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005041222341588575154.jpg",

      date_time: "2020-05-04 12:22:34PM",
    },
    {
      id: "82",
      title: "Iceland",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Iceland - 8 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Iceland SIM CARDItinerary Highlights :Northern Lights, Akureyri, ReykjavikNorthern Lights Premium TourHop On and Hop Off Bus in ReykjavikGolden Circle and Secret Lagoon Full Day Bus TourSouth Iceland Tour from ReykjavikClassic Whale Watching Cruise in AkureyriAkureyri North Iceland Waterfalls and Nature Baths Small-Group TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note :This Itinerary is displayed to give an Idea about Iceland's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Iceland. Looking forward to hear from you !!",
      additional_note:
        "Additional Note :This Itinerary is displayed to give an Idea about Iceland's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for Iceland. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Iceland - 8 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Iceland SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Northern Lights, Akureyri, ReykjavikNorthern Lights Premium TourHop On and Hop Off Bus in ReykjavikGolden Circle and Secret Lagoon Full Day Bus TourSouth Iceland Tour from ReykjavikClassic Whale Watching Cruise in AkureyriAkureyri North Iceland Waterfalls and Nature Baths Small-Group Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005041257021588577222.jpg",

      date_time: "2020-05-04 12:57:02PM",
    },
    {
      id: "83",
      title: "Fiji (Denarau)",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Denarau - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be providedLeisure, Cruise, Island HoppingSunset Dinner Cruise (scheduled departures) and enjoy a spectacular tropical sunsetMana Island full day Cruise (includes lunch and return transfer to/from hotel).Jet boat rides over the Nadi River, Parasailing, River Safaris and many more activities at the ResortCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Denarau - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be provided",
      Itinerary_highlights:
        "Leisure, Cruise, Island HoppingSunset Dinner Cruise (scheduled departures) and enjoy a spectacular tropical sunsetMana Island full day Cruise (includes lunch and return transfer to/from hotel).Jet boat rides over the Nadi River, Parasailing, River Safaris and many more activities at the Resort",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005040301171588584677.jpg",

      date_time: "2020-05-04 15:01:17PM",
    },
    {
      id: "84",
      title: "Fiji (Nadi)",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Nadi - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be providedLeisure, Cruise, Mana Island, Sky DivingSunset Dinner Cruise (scheduled departures) and enjoy a spectacular tropical sunsetMana Island full day Cruise (includes lunch and return transfer to/from hotel).Snorkelling, Skydiving, River Safari, Cave Tours, or enjoy the day at the SpaCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Nadi - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be provided",
      Itinerary_highlights:
        "Leisure, Cruise, Mana Island, Sky DivingSunset Dinner Cruise (scheduled departures) and enjoy a spectacular tropical sunsetMana Island full day Cruise (includes lunch and return transfer to/from hotel).Snorkelling, Skydiving, River Safari, Cave Tours, or enjoy the day at the Spa",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005040720271588600227.jpg",

      date_time: "2020-05-04 19:20:27PM",
    },
    {
      id: "85",
      title: "Fiji (Mamanuca Islands)",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Nadi - 1 NightMamanuca Islands - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be providedLeisure, Snorkelling, Sky DivingTake a Cruise (scheduled departures) and enjoy a spectacular tropical sunsetVarious other Water activities provided at your Island resortSnorkelling, Skydiving, River Safari, Cave Tours, or enjoy the day at the SpaCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!br",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Nadi - 1 NightMamanuca Islands - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be provided",
      Itinerary_highlights:
        "Leisure, Snorkelling, Sky DivingTake a Cruise (scheduled departures) and enjoy a spectacular tropical sunsetVarious other Water activities provided at your Island resortSnorkelling, Skydiving, River Safari, Cave Tours, or enjoy the day at the Spa",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005040734071588601047.jpg",

      date_time: "2020-05-04 19:34:07PM",
    },
    {
      id: "86",
      title: "Fiji (Coral Coast)",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Coral Coast - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be providedLeisure, Sigatoka River, Suva CitySigatoka River Safari Tour in Jet Boat (Join - in Tour, Half day )Suva city Full Day Tour, Fiji Museum, pure Fiji Factory, and sightseeing (Join - in Tour, Full day)National Trust of Fiji – the Sigatoka Sand Dunes National Park, Kula Eco Park, Lawai Village TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Fiji available tours and you can include any Sightseeing options of your choice.Fiji has 2 Different type of Resort (Beach Resort  Island Resort)Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions:HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Coral Coast - 4 NightsEntrance Ticket for all sightseeing  Parks mentioned in plan4 Sets of Recommendations (Food Joint, Weather Forecast etc.. )All tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Fijian SIM CARD will be provided",
      Itinerary_highlights:
        "Leisure, Sigatoka River, Suva CitySigatoka River Safari Tour in Jet Boat (Join - in Tour, Half day )Suva city Full Day Tour, Fiji Museum, pure Fiji Factory, and sightseeing (Join - in Tour, Full day)National Trust of Fiji – the Sigatoka Sand Dunes National Park, Kula Eco Park, Lawai Village Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005040749281588601968.jpg",

      date_time: "2020-05-04 19:49:28PM",
    },
    {
      id: "87",
      title: "New Zealand",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 2 NightsQueenstown - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARDItinerary Highlights :Mount Cook, Queenstown Zipride  Luge Ride, Hobbiton Movie SetHobbiton Movie Set and Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour  Sky Tower TicketChristchurch Tram TourMount Cook Full Day TourKawarau Zipride  Queenstown Skyline Gondola and Luge RideMildford Sound Day TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 2 NightsQueenstown - 3 NightsEntrance Ticket for all sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Mount Cook, Queenstown Zipride  Luge Ride, Hobbiton Movie SetHobbiton Movie Set and Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour  Sky Tower TicketChristchurch Tram TourMount Cook Full Day TourKawarau Zipride  Queenstown Skyline Gondola and Luge RideMildford Sound Day Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005081226021588920962.jpg",

      date_time: "2020-05-08 12:26:02PM",
    },
    {
      id: "88",
      title: "New Zealand",
      sub_title: "10 Days / 9 Nights",
      short_description: "10 Days / 9 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 2 NightsDunedin - 2 NightsQueenstown - 2 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARDItinerary Highlights :Hobbiton Movie set, Christchurch Tram, Royal AlbatrossHobbiton Movie Set and Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour  Sky Tower TicketChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Kawarau Zipride And Queenstown Skyline Gondola and Luge RideOtago Peninsula Half-Day Tour from DunedinRoyal Albatross Centre TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 2 NightsDunedin - 2 NightsQueenstown - 2 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Hobbiton Movie set, Christchurch Tram, Royal AlbatrossHobbiton Movie Set and Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour  Sky Tower TicketChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Kawarau Zipride And Queenstown Skyline Gondola and Luge RideOtago Peninsula Half-Day Tour from DunedinRoyal Albatross Centre Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080133101588924990.jpg",

      date_time: "2020-05-08 13:33:10PM",
    },
    {
      id: "89",
      title: "Seychelles",
      sub_title: "5 Days / 4 Nights",
      short_description: "5 Days / 4 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary SIM CARDItinerary Highlights :Private Tours, Island VisitBeach hopping Tour on Mahe SeychellesHalf Day Discovery Tour of VictoriaSeychelles Ruins Water Fall and Beach ToursPrivate Tour | Beautiful island tourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Seychelles available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Seychelles available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Private Tours, Island VisitBeach hopping Tour on Mahe SeychellesHalf Day Discovery Tour of VictoriaSeychelles Ruins Water Fall and Beach ToursPrivate Tour | Beautiful island tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080350011588933201.png",

      date_time: "2020-05-08 15:34:14PM",
    },
    {
      id: "90",
      title: "Seychelles",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary SIM CARDItinerary Highlights :Private Tours, Island VisitBeach hopping Tour on Mahe SeychellesHalf Day Discovery Tour of VictoriaSeychelles Ruins Water Fall and Beach ToursPrivate Tour | Beautiful island tourSeychelles Ruins Water Fall and Beach ToursCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Seychelles available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Seychelles available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Private Tours, Island VisitBeach hopping Tour on Mahe SeychellesHalf Day Discovery Tour of VictoriaSeychelles Ruins Water Fall and Beach ToursPrivate Tour | Beautiful island tourSeychelles Ruins Water Fall and Beach Tours",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080357161588933636.png",

      date_time: "2020-05-08 15:57:16PM",
    },
    {
      id: "91",
      title: "New Zealand",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days /  7 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Wellington - 2 NightsRotorua - 2 NightsQueenstown - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARDItinerary Highlights :Hobbiton movie set and Waitamo Glowworm caves TourMitai Maori Village Evening TourKawarau Zipride  Queenstown Skyline Gondola  Luge RideMilford Sound TourArrowtown, Gibbston Valley, and Glenorchy Day TourWellington City  Bay TourCable Car Ride in WellingtonHop on Hop off Sightseeing Bus Tour in WellingtonCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Wellington - 2 NightsRotorua - 2 NightsQueenstown - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, New Zealand SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Hobbiton movie set and Waitamo Glowworm caves TourMitai Maori Village Evening TourKawarau Zipride  Queenstown Skyline Gondola  Luge RideMilford Sound TourArrowtown, Gibbston Valley, and Glenorchy Day TourWellington City  Bay TourCable Car Ride in WellingtonHop on Hop off Sightseeing Bus Tour in Wellington",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080406151588934175.jpg",

      date_time: "2020-05-08 16:06:15PM",
    },
    {
      id: "92",
      title: "Mauritius",
      sub_title: "4 Days / 3 Nights",
      short_description: "4 Days / 3 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour, Island VisitDiscover Mauritius TourCatamaran Cruise with Snorkelling - Full DayWhale Watching - Full DayCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Mauritius available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Mauritius available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour, Island VisitDiscover Mauritius TourCatamaran Cruise with Snorkelling - Full DayWhale Watching - Full Day",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080410041588934404.png",

      date_time: "2020-05-08 16:10:04PM",
    },
    {
      id: "93",
      title: "Mauritius",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :istrongCity Tour, Island Visit/strong/i/blockquoteulDiscover Mauritius - 8hrs Tour LocalSolar Undersea Walk ActivityFull Day Guided Tour: Southern Mauritius Landscape TourCatamaran cruise to Ile aux cerfs- Full Day Island TourTrou aux Biches Scuba Diving AdventureCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Mauritius available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Mauritius available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :istrongCity Tour, Island Visit/strong/i/blockquoteulDiscover Mauritius - 8hrs Tour LocalSolar Undersea Walk ActivityFull Day Guided Tour: Southern Mauritius Landscape TourCatamaran cruise to Ile aux cerfs- Full Day Island TourTrou aux Biches Scuba Diving Adventure",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080431011588935661.png",

      date_time: "2020-05-08 16:24:49PM",
    },
    {
      id: "94",
      title: "New Zealand and Fiji",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 3 NightsFiji - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARDItinerary Highlights :Auckland, Nadi, Mamanuca IslandsHobbiton Movie Set  Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour + Sky Tower AdmissionChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Visit Mamanuca Islands in Cruise with Snorkelling  LunchGo Dirty on Nadi’s Back Roads in Quad BikingOff Road Cave Safari TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about New Zealand's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsChristchurch - 3 NightsFiji - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Auckland, Nadi, Mamanuca IslandsHobbiton Movie Set  Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour + Sky Tower AdmissionChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Visit Mamanuca Islands in Cruise with Snorkelling  LunchGo Dirty on Nadi’s Back Roads in Quad BikingOff Road Cave Safari Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080438421588936122.jpg",

      date_time: "2020-05-08 16:38:42PM",
    },
    {
      id: "95",
      title: "Vietnam and Cambodia",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi - 3 NightsSaPa - 2 NightsSiem Reap - 3 NightsEntrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARDItinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay Day Tour from HanoiHoa Lu - Tam Coc Day TripSunworld Fansipan Legend Admission TicketLove and Silver Waterfalls Private Day Tour from Sapa(5hrs - Private Tour)Angkor Temples Tour ( Full Day Tour)Phare, The Cambodian CircusCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Cambodia available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Cambodia available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi - 3 NightsSaPa - 2 NightsSiem Reap - 3 NightsEntrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay Day Tour from HanoiHoa Lu - Tam Coc Day TripSunworld Fansipan Legend Admission TicketLove and Silver Waterfalls Private Day Tour from Sapa(5hrs - Private Tour)Angkor Temples Tour ( Full Day Tour)Phare, The Cambodian Circus",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080441291588936289.png",

      date_time: "2020-05-08 16:41:29PM",
    },
    {
      id: "98",
      title: "Vietnam and Singapore",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi 3(N)Danang 2(N)Singapore 2(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay One Day VisitTam Coc, Hoa Lu Full Day VisitNinh Binh Day Tour from HanoiBa Na Hills and Golden Bridge Day TourGardens by the Bay Ticket in SingaporeUniversal studio ticketsSingapore cable Car Skypass/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Singapore available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Singapore available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi 3(N)Danang 2(N)Singapore 2(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay One Day VisitTam Coc, Hoa Lu Full Day VisitNinh Binh Day Tour from HanoiBa Na Hills and Golden Bridge Day TourGardens by the Bay Ticket in SingaporeUniversal studio ticketsSingapore cable Car Skypass/",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080746021588947362.png",

      date_time: "2020-05-08 19:46:02PM",
    },
    {
      id: "96",
      title: "New Zealand and Fiji",
      sub_title: "12 Days / 11 Nights",
      short_description: "12 Days / 11 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsQueenstown - 3 NightsMamanuca / Yasawa Island - 2 NightsNadi - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARDItinerary Highlights :Pacific Harbour, Cave safari, Hobbiton Movie set, Auckland Sky TowerHobbiton Movie Set  Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour + Sky Tower AdmissionChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Stay in Private Island (Mamanuca / Yasawa Island) - 2 NightsGo Dirty on Nadi’s Back Roads in Quad BikingOff Road Cave Safari TourFull Day - Coastal Fiji  Pacific Harbour TourCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about New Zealand and Fiji's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about New Zealand and Fiji's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Auckland - 3 NightsQueenstown - 3 NightsMamanuca / Yasawa Island - 2 NightsNadi - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Pacific Harbour, Cave safari, Hobbiton Movie set, Auckland Sky TowerHobbiton Movie Set  Waitamo Glowworm Caves TourSea Life Kelly Tarlton's  Aquarium Entry Ticket in AucklandAuckland City Tour + Sky Tower AdmissionChristchurch Tram TourTranzAlps Scenic Train Journey (Same day)Stay in Private Island (Mamanuca / Yasawa Island) - 2 NightsGo Dirty on Nadi’s Back Roads in Quad BikingOff Road Cave Safari TourFull Day - Coastal Fiji  Pacific Harbour Tour",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080501311588937491.jpg",

      date_time: "2020-05-08 17:01:31PM",
    },
    {
      id: "97",
      title: "Thailand and Malaysia",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Kuala Lumpur - 2 NightsPhuket - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARDItinerary Highlights :Phi Phi Islands, Batu Caves, James Bond Island, Kuala Lumpur TowerPhi Phi Islands and Maya Bay Day Tour in PhuketJames Bond Day Tour from Phuket by Longtail Boat, Speedboat or Big BoatPhuket Dolphin Show TicketKL Tower Admission TicketAquaria KLCC Ticket in Kuala LumpurKuala Lumpur Suburbs and Batu CavesCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand and Malaysia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!brbr",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand and Malaysia's  available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :Hotel Accommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Kuala Lumpur - 2 NightsPhuket - 3 NightsEntrance Ticket to sightseeing  Parks mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeather Report for your travel datesComplimentary, Country SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Phi Phi Islands, Batu Caves, James Bond Island, Kuala Lumpur TowerPhi Phi Islands and Maya Bay Day Tour in PhuketJames Bond Day Tour from Phuket by Longtail Boat, Speedboat or Big BoatPhuket Dolphin Show TicketKL Tower Admission TicketAquaria KLCC Ticket in Kuala LumpurKuala Lumpur Suburbs and Batu Caves",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080533431588939423.jpg",

      date_time: "2020-05-08 17:33:43PM",
    },
    {
      id: "102",
      title: "Thailand and Vietnam",
      sub_title: "8 Days / 7 Nights",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi (2) NPattaya (2) NBangkok (2) NEntrance Ticket to sightseeing (if any) mentioned in plan.All tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulHalong Bay Day Tour from HanoiHanoi half a day City Day TourKoh Larn Speedboat Day Trip from Pattaya with LunchThe Sanctuary of TruthChao Phraya Princess CruiseBangkok Old City Half Day TourAyutthaya Day Tour from Bangkok/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand  Vietnam available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand  Vietnam available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Hanoi (2) NPattaya (2) NBangkok (2) NEntrance Ticket to sightseeing (if any) mentioned in plan.All tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulHalong Bay Day Tour from HanoiHanoi half a day City Day TourKoh Larn Speedboat Day Trip from Pattaya with LunchThe Sanctuary of TruthChao Phraya Princess CruiseBangkok Old City Half Day TourAyutthaya Day Tour from Bangkok/",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005101240151589094615.png",

      date_time: "2020-05-10 12:40:15PM",
    },
    {
      id: "99",
      title: "Vietnam and Singapore",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupNo Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay One Day VisitTam Coc, Hoa Lu Full Day VisitSunworld Fansipan Legend Admission TicketGardens by the Bay Ticket in SingaporeUniversal studio ticketsSingapore cable Car Skypass/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Singapore available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Vietnam  Singapore available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupNo Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Hanoi, SaPa  Siem ReapHalong Bay One Day VisitTam Coc, Hoa Lu Full Day VisitSunworld Fansipan Legend Admission TicketGardens by the Bay Ticket in SingaporeUniversal studio ticketsSingapore cable Car Skypass/",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005080754551588947895.png",

      date_time: "2020-05-08 19:54:55PM",
    },
    {
      id: "100",
      title: "Maldives and Srilanka",
      sub_title: "7 Days / 6 Nights",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Maldives - 3NKandy - 1NDambulla - 1NColombo - 1NPrivate Car for Srilanka SightseeingSightseeing's  as per your choiceLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :Private Tour, Island Tour, Submarine Tour/blockquoteulHalf a day Maldives City tourDay Visit to Centara Ras Fushi Resort  SpaSubmarine TourHalf Day Snorkelling AdventurePinnawala Elephant Orphanage Day Tour from KandyNuwara Eliya Day Tour from KandyColombo Half Day TourSigiriya Fortress Visit/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Maldives  Srilanka available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Maldives  Srilanka available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalised tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Maldives - 3NKandy - 1NDambulla - 1NColombo - 1NPrivate Car for Srilanka SightseeingSightseeing's  as per your choiceLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Private Tour, Island Tour, Submarine Tour/blockquoteulHalf a day Maldives City tourDay Visit to Centara Ras Fushi Resort  SpaSubmarine TourHalf Day Snorkelling AdventurePinnawala Elephant Orphanage Day Tour from KandyNuwara Eliya Day Tour from KandyColombo Half Day TourSigiriya Fortress Visit",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005090607031589027823.png",

      date_time: "2020-05-09 18:07:03PM",
    },
    {
      id: "101",
      title: "Maldives and Srilanka",
      sub_title: "9 Days / 8 Nights",
      short_description: "9 Days / 8 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Island Resort - 2NBeach Resort - 2NSrilanka - 4NEntrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupNo Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary SIM CARDItinerary Highlights :Island Stay, Submarine Tour, Private Tour of SrilankaHalf a day Maldives City TourSubmarine TourPinnawala Elephant Orphanage Day Tour from KandyNuwara Eliya Day TourColombo Half a Day City TourSigiriya Fortress Visit/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Maldives  Srilanka available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Maldives  Srilanka available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Island Resort - 2NBeach Resort - 2NSrilanka - 4NEntrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupNo Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Island Stay, Submarine Tour, Private Tour of SrilankaHalf a day Maldives City TourSubmarine TourPinnawala Elephant Orphanage Day Tour from KandyNuwara Eliya Day TourColombo Half a Day City TourSigiriya Fortress Visit",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005090731191589032879.png",

      date_time: "2020-05-09 18:35:24PM",
    },
    {
      id: "103",
      title: "Thailand and Vietnam",
      sub_title: "6 Days / 5 Nights",
      short_description: "6 Days / 5 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupNo Fixed Itinerary, Sightseeing's  as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary SIM CARDItinerary Highlights :City Tour/blockquoteulHalong Bay Day Tour from HanoiHanoi half a day City Day TourChao Phraya Princess CruiseBangkok Old City Half Day TourAyutthaya Day Tour from Bangkok/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Thailand  Vietnam available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Thailand  Vietnam available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you ",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Entrance Ticket tosightseeing  Parks mentioned in planAll tours are shared / groupNo Fixed Itinerary, Sightseeings as per your choiceActivities with TransfersLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesComplimentary SIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulHalong Bay Day Tour from HanoiHanoi half a day City Day TourChao Phraya Princess CruiseBangkok Old City Half Day TourAyutthaya Day Tour from Bangkok",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005101248151589095095.png",

      date_time: "2020-05-10 12:48:15PM",
    },
    {
      id: "104",
      title: "Norway & Finland",
      sub_title: "9 Days / 8 Nights ",
      short_description: "9 Days / 8 Nights ",
      description:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Oslo 2(N)Tromsø 3(N)Helsinki 3(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulOslo Combo Tour: Grand City Tour and Oslo Fjord CruiseOslo Discovery Tour: Holmenkollen, Vigeland Park, Fram and Viking Ship MuseumNorthern Lights Big Bus Chase from TromsøMagic Ice TromsøEssential Tromso Historical City WalkHelsinki and Suomenlinna Sightseeing Half Day TourTallinn Day Cruise from HelsinkiSnowmobile Safari in Helsinki Archipelago with Lunch/Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Norway  Finland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Norway  Finland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (3 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Oslo 2(N)Tromsø 3(N)Helsinki 3(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are Join in/ groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulOslo Combo Tour: Grand City Tour and Oslo Fjord CruiseOslo Discovery Tour: Holmenkollen, Vigeland Park, Fram and Viking Ship MuseumNorthern Lights Big Bus Chase from TromsøMagic Ice TromsøEssential Tromso Historical City WalkHelsinki and Suomenlinna Sightseeing Half Day TourTallinn Day Cruise from HelsinkiSnowmobile Safari in Helsinki Archipelago with Lunch",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100115111589096711.png",

      date_time: "2020-05-10 13:15:11PM",
    },
    {
      id: "105",
      title: "Norway",
      sub_title: "7 Days / 6 Nights ",
      short_description: "7 Days / 6 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Oslo 2(N)Tromsø 3(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulOslo Combo Tour: Grand City Tour and Oslo Fjord CruiseOslo Discovery Tour: Holmenkollen, Vigeland Park, Fram and Viking Ship MuseumOslo Nature Walks: Island hoppingNorthern Lights Big Bus Chase from TromsøReindeer Experience, Sami Culture, and Short Reindeer Sledding Tour from TromsoEssential Tromso Historical City WalkCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Norway available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Norway available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Oslo 2(N)Tromsø 3(N)Entrance Ticket to sightseeing (if any) mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulOslo Combo Tour: Grand City Tour and Oslo Fjord CruiseOslo Discovery Tour: Holmenkollen, Vigeland Park, Fram and Viking Ship MuseumOslo Nature Walks: Island hoppingNorthern Lights Big Bus Chase from TromsøReindeer Experience, Sami Culture, and Short Reindeer Sledding Tour from TromsoEssential Tromso Historical City Walk",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100200071589099407.png",

      date_time: "2020-05-10 14:00:07PM",
    },
    {
      id: "106",
      title: "Sweden, Norway and Finland",
      sub_title: "10 Days / 9 Nights ",
      short_description: "10 Days / 9 Nights ",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Stockholm 3(N)Tromsø 3(N)Helsinki 3(N)Entrance Ticket tosightseeing mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulPanoramic Stockholm Highlights with Vasa Museum and Gamla StanThe Original Stockholm Ghost Walk and Historical TourStockholm Under the Bridges CruiseNorthern Lights Big Bus Chase from TromsøReindeer Experience, Sami Culture, and Short Reindeer Sledding Tour from TromsoEssential Tromso Historical City WalkHelsinki and Suomenlinna Sightseeing Half Day TourTallinn Day Cruise from HelsinkiSnowmobile Safari in Helsinki Archipelago with LunchCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Sweden, Norway and Finland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Sweden, Norway and Finland available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Stockholm 3(N)Tromsø 3(N)Helsinki 3(N)Entrance Ticket tosightseeing mentioned in planAll tours are shared / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulPanoramic Stockholm Highlights with Vasa Museum and Gamla StanThe Original Stockholm Ghost Walk and Historical TourStockholm Under the Bridges CruiseNorthern Lights Big Bus Chase from TromsøReindeer Experience, Sami Culture, and Short Reindeer Sledding Tour from TromsoEssential Tromso Historical City WalkHelsinki and Suomenlinna Sightseeing Half Day TourTallinn Day Cruise from HelsinkiSnowmobile Safari in Helsinki Archipelago with Lunch",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100428131589108293.png",

      date_time: "2020-05-10 16:28:13PM",
    },
    {
      id: "107",
      title: "Italy, France, Switzerland and Spain",
      sub_title: "12 Days / 11 Nights ",
      short_description: "12 Days / 11 Nights ",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Rome 2(N)Paris 3(N)Zurich 3(N)Madrid 3(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulVatican and Colosseum Combo Tour:Pompeii Ruins Day Tour from RomeRome Street Food Tour with Local GuideLouvre under the StarsEvening Eiffel Tower Tour  Seine River Cruise with ChampagneDisneyland® Paris 1 or 2 Parks Day Trip from Central ParisVersailles Palace Half Day Private Guided Tour From ParisDay Trip to Mount First Top Adventure from ZurichJungfraujoch Day Tour from ZurichHalf Day Tour to Rhine Falls with Panoramic Lift from ZurichAvila and Segovia Full Day Guided Tour from MadridMadrid Segway TourMadrid Half-Day Tour with Prado Museum, Royal Palace or Bernabeu Stadium VisitCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Italy, France, Switzerland and Spain available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Italy, France, Switzerland and Spain available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Rome 2(N)Paris 3(N)Zurich 3(N)Madrid 3(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulVatican and Colosseum Combo Tour:Pompeii Ruins Day Tour from RomeRome Street Food Tour with Local GuideLouvre under the StarsEvening Eiffel Tower Tour  Seine River Cruise with ChampagneDisneyland® Paris 1 or 2 Parks Day Trip from Central ParisVersailles Palace Half Day Private Guided Tour From ParisDay Trip to Mount First Top Adventure from ZurichJungfraujoch Day Tour from ZurichHalf Day Tour to Rhine Falls with Panoramic Lift from ZurichAvila and Segovia Full Day Guided Tour from MadridMadrid Segway TourMadrid Half-Day Tour with Prado Museum, Royal Palace or Bernabeu Stadium Visit",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100449381589109578.png",

      date_time: "2020-05-10 16:49:38PM",
    },
    {
      id: "108",
      title: "Spain",
      sub_title: "8 Days / 7 Nights ",
      short_description: "8 Days / 7 Nights",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Madrid 3(N)Barcelona2(N)Seville2(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :City Tour/blockquoteulAvila and Segovia Full Day Guided Tour from MadridMadrid Segway TourMadrid Half-Day Tour with Prado Museum, Royal Palace or Bernabeu Stadium VisitMontserrat Tour from Barcelona Including Lunch and Gourmet Wine TastingPriority Access: Best of Barcelona Tour Including Sagrada FamiliaInteractive Spanish Cooking Experience in BarcelonaCave of Wonders  Aracena Day Tour from SevilleSeville Night Walking Tour and Flamenco ShowCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Spain available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Spain available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Madrid 3(N)Barcelona2(N)Seville2(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :City Tour/blockquoteulAvila and Segovia Full Day Guided Tour from MadridMadrid Segway TourMadrid Half-Day Tour with Prado Museum, Royal Palace or Bernabeu Stadium VisitMontserrat Tour from Barcelona Including Lunch and Gourmet Wine TastingPriority Access: Best of Barcelona Tour Including Sagrada FamiliaInteractive Spanish Cooking Experience in BarcelonaCave of Wonders  Aracena Day Tour from SevilleSeville Night Walking Tour and Flamenco Show",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100503341589110414.png",

      date_time: "2020-05-10 17:03:34PM",
    },
    {
      id: "109",
      title: "Greece",
      sub_title: "9 Days / 8 Nights ",
      short_description: "9 Days / 8 Nights ",
      description:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Athens 3(N)Santorini 3(N)Mykonos 2(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARDItinerary Highlights :Athens, Mykonos  SantoriniPoros, Hydra, and Aegina Day Cruise with Lunch from AthensMeteora Day Tour from Athens with TrainAthens at Night Small-Group Walking Tour with DinnerSantorini Volcanic Islands and Sunset Cruise Trip with DinnerSantorini Traditional Bus Tour with Oia SunsetMykonos: Superior Yacht Cruise to Rhenia Island and Guided Tour of DelosCancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !Additional Note:This Itinerary is displayed to give an Idea about Greece available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      additional_note:
        "Additional Note:This Itinerary is displayed to give an Idea about Greece available tours and you can include any Sightseeing options of your choice.Get in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Athens 3(N)Santorini 3(N)Mykonos 2(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Athens, Mykonos  SantoriniPoros, Hydra, and Aegina Day Cruise with Lunch from AthensMeteora Day Tour from Athens with TrainAthens at Night Small-Group Walking Tour with DinnerSantorini Volcanic Islands and Sunset Cruise Trip with DinnerSantorini Traditional Bus Tour with Oia SunsetMykonos: Superior Yacht Cruise to Rhenia Island and Guided Tour of Delos",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",

      image: "202005100518281589111308.png",

      date_time: "2020-05-10 17:18:28PM",
    },
    {
      id: "110",
      title: "Switzerland, Italy and Croatia",
      sub_title: "12 Days / 11 Nights",
      short_description: "12 Days / 11 Nights",
      description: "",
      additional_note:
        "Additional Note:The below shown is not a package for Switzerland, Italy  CroatiaThis Itinerary is displayed to give an Idea about the possible combination and its available tours and you can include/exclude any Sightseeing options of your choice on top of thisGet in touch with our planning team to your own personalized tour plan for your travel dates. Looking forward to hear from you !!",
      tour_Inclusions:
        "Tour Inclusions :HotelAccommodation (4 Star  above)Daily BreakfastFlight Fare (Both Ways)Airport Transfers (Round trip)Lunch/Dinner (As per the Itinerary)Rome 3(N)Venice 2(N)Zurich 3(N)Zagreb 3(N)Entrance Ticket tosightseeing mentioned in planAll tours are join in / groupLocal Restaurants suggestions will be providedAll day Support until you complete your tourWeatherReportforyourtraveldatesSIM CARD",
      Itinerary_highlights:
        "Itinerary Highlights :Rome, Venice, Zurich, ZagrebVatican and Colosseum Combo TourPompeii Ruins Day Tour from RomeRome Street Food Tour with Local GuideVenice Grand Canal Gondola ExperienceMurano, Burano, and Torcello Day TripBest Of Venice Walking TourDay Trip to Mount First Top Adventure from ZurichJungfraujoch Day Tour from ZurichHalf Day Tour to Rhine Falls with Panoramic Lift from ZurichPlitvice Lakes National Park and Rastoke Day Tour from ZagrebLjubljana and Lake Bled Whole Day Tour from Zagreb",
      cancellation_policy:
        "Cancellation PolicyCancellation Charges  Refunds are subject to the transportation / accommodation / activities / tour providers through which your reservations are made.Your Hotel reservations will be available for Free Cancellation until certain period, beyond that cancellation charges will be applicable as per Hotel PolicyVISA Charges once paid to embassy are Non RefundableOur Service Fee is 50% Refundable if cancellation done before 15 days and 100% non-refundable when cancelled on or after 14 day.Discount amount will not be considered during cancellation !",
      int_dom: "1",
      region_id: "0",
      country_id: "0",
      destination_id: "0",
      image: "202008060858401596727720.jpg",
      cover: "202008060901571596727917.jpg",
      date_time: "2020-05-10 17:28:21PM",
    },
  ];
  let data = {
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
  };
  let cityNames = ["Spain", "Italy", "France", "Turkey"];
  const [countryDetails, setCountryDetails] = useState(data);

  //   console.log(country, "name");
  return (
    <div className="countryInner_Details">
      <div className="countryInner_image">
        <img src={countryDetails.imageUrl} />
      </div>

      <div className="countryInner_cities">
        <div className="cityName_container">
          {cityNames.map((city) => (
            <h2>{city}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInner;
