import React, { Component } from "react";
import TourHeader from "../Reusable components/TourHeader";
import Luxury from "../../assests/luxury.jpg";

const LuxuryTour = () => {
  return (
    <div className="Luxury_tour-container">
      <TourHeader
        image={Luxury}
        title={"Luxury Tour"}
        description={"asghadfhadh"}
        className={"Luxury_tour"}
      />
      <div className="Luxury_tour">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          sapiente praesentium, reiciendis ipsam placeat blanditiis dolores,
          saepe facere ex minima consectetur harum. Quia incidunt adipisci sit
          assumenda numquam accusamus molestiae dignissimos labore nemo odit,
          aliquam voluptatem expedita autem, laborum temporibus sunt culpa nisi
          facere. Laboriosam molestias quisquam, nisi adipisci ipsum maxime
          labore velit dolor doloribus obcaecati? Eaque nulla ducimus ad id ab,
          minus assumenda, iste impedit nesciunt officia quam culpa fugiat
          deserunt? Hic quibusdam, in nulla aliquam harum libero, reiciendis ea
          quod beatae, eum blanditiis. Possimus reprehenderit, enim iste quidem
          pariatur facilis velit architecto nobis est reiciendis laborum
          explicabo tempora!
        </h1>
      </div>
    </div>
  );
};

export default LuxuryTour;
