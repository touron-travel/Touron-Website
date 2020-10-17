import React from "react";
import "./About.css";
import Navbar from "../Home components/Navbar/Navbar";
// import Footer from "../Home components/Footer/Footer";
import bg from "../assests/bg_3.jpg";
import intro from "../assests/intro.png";
import { Link } from "react-router-dom";


export default function About() {
  return ( 
  <div className="about">
  <div className="about_top">
    <div className="nav">
      <Navbar />
    </div>
  </div>
  <div className="aboutimage">
    <img className="abimage" src={bg} alt="" />
    <div className="overlay"></div>
    <div className="abouttile">
    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
    <div className="col-md-9 ftco-animate pb-5 text-center">
      <p className="breadcrumbs"><span className="mr-2"><Link className="linkin" to="/">Home <i className="fa fa-chevron-right"></i></Link></span><span className="abt">About us <i className="fa fa-chevron-right"></i></span></p>
      <h1 className="mb-0 bread">About Us</h1>
    </div>
    </div>
    </div>
  </div>
  <div className="intro">
    <div className="row">
      <div className="col-lg-7">
        <img className="intro_image" src={intro} alt=""/>
      </div>
      <div className="col-lg-5">
        <div className="intro_content">
          <div className="intro_title">we have the best tours</div>
          <p className="intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer elementum orci eu vehicula pretium. Donec bibendum tristique condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros. Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam id lorem eu nisl pellentesque semper. Nullam tincidunt metus placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus. Ut eleifend dui nunc, non fermentum quam placerat non. Etiam venenatis nibh augue, sed eleifend justo tristique eu</p>
						<div className="btns"><a href="#">explore now<span></span><span></span><span></span></a></div>
        </div>
      </div>
    </div>
  </div>
  </div>



  // <div className="title_about">About Us</div>
  // <div className="content_about">
  //   <div className="border">
  //   <p className="content_title">Travel your dreams today!</p>
  //    <p className="content_name">Once a year, go somewhere you have never been before!</p>
  //    </div>
  //    <p className="content_desc">Tour On is the one-stop-shop for all your travel plans and needs. We work with you to manage all elements of your travel in an efficient and cost-effective manner. In a world filled with options, why should you settle for less when we give you more! TourOn’s fully customizable travel packages give you a tour that is tailored exactly the way you like it. Leave all the hard work to us! We will make your dream vacation a reality. Based on a survey of your tastes and destination preferences, TourOn’s algorithm provides a wide range of choices with the best prices. All you need to do is pick!</p>
  // </div>
  // <div className="hero">
  //   <div className="hero_content">
  //     <div className="sub_border">
  //     <p className="hero_subtitle">WORDS FROM</p>
  //     </div>
  //   <p className="hero_title">MR.VIKASH MANOHARAN CEO, FOUNDER</p>
  //   <p className="hero_desc">Founded in August of 2018, TourOn has since planned and lead more than 200 dream tours. Vikash Manoharan, Founder of TourOn, is a travel enthusiast and found TourOn to help others realize their wanderlust goals. Vikash used to work in the IT industry until one day he realized, a life confined to a desk is not one for him. TourOn took wings out of his passion for travel and has grown through his ideas as an experienced traveler.</p>
  //   </div>
  //   <div className="hero_image">
  //     <img src="https://touron.in/assets/frontend/images/homepage/about-us-2.jpg" alt=""/>
  //   </div>
  // </div>
  // <div className="store">
  //   <h4 className="store_title">What’s in Store</h4>
  //   <p className="store_desc">TourOn provides both Domestic and International tour packages with different customization options. Do you and your gang often find yourself dreaming on and on about that perfect trip but it’s just not happening because no one wants to take the effort to do all the research and planning? Then our Planned Tour package is the right option for you. Click here to know more. Or are you a wanderer soul looking for adventure? TourOn’s Suprise Tour might just be the thing you are looking for. To know more about this package, click here. And our Road Trip package is the answer to all explorers who are in love with their bikes.</p>
  // </div>
  // <div className="team">
  //  <div className="title_team">Our Team</div>
  //  <div className="team_image">
  //    <div> 
  //   <img src="https://touron.in/assets/frontend/images/homepage/team-2.jpg" alt=""/>
  //   <h3 className="text">Rathan</h3>
  //    <h5 className="text">Business & Sales Lead</h5>
  //    </div>
  //    <div>
  //   <img src="https://touron.in/assets/frontend/images/homepage/team-3.jpg" alt=""/>
  //   <h3 className="text">Dhiviya</h3>
  //    <h5 className="text">Planning Team Lead</h5>
  //    </div>
  //    <div>
  //   <img src="https://touron.in/assets/frontend/images/homepage/team-4.jpg" alt=""/>
  //   <h3 className="text">Keerthi</h3>
  //    <h5 className="text">Head of Finance & HR</h5>
  //    </div>
  //  </div>
  // </div>
  // <div className="footer">
  //       <Footer />
  //     </div>
  // </div>
    )
}
