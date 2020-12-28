import React from "react";
import "./About.css";
import intro from "../assests/intro.png";
import stats_1 from "../assests/stats_1.png";
import stats_2 from "../assests/stats_2.png";
import stats_3 from "../assests/stats_3.png";
import stats_4 from "../assests/stats_4.png";
import person1 from "../assests/person_1.jpg";
import team1 from "../assests/team_1.jpg";
import team2 from "../assests/team_2.jpg";
import team3 from "../assests/team_3.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function About() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="about">
      <div className="about_top"></div>
      <div className="aboutimage">
        <div className="abouttile">
          <p className="breadcrumbs">
            <span className="mr-2">
              <Link className="linkin" to="/">
                Home <i className="fa fa-chevron-right"></i>
              </Link>
            </span>
            <span className="abt">
              About us <i className="fa fa-chevron-right"></i>
            </span>
          </p>
          <h1 className="bread">About Us</h1>
        </div>
      </div>
      <div className="intro">
        <div className="intro_image-flex">
          <img className="intro_image" src={intro} alt="" />
        </div>
        <div className="intro_content">
          <div className="intro_title">we have the best tours</div>
          <p className="intro_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna.
            Integer elementum orci eu vehicula pretium. Donec bibendum tristique
            condimentum. Aenean in lacus ligula. Phasellus euismod gravida eros.
            Aenean nec ipsum aliquet, pharetra magna id, interdum sapien. Etiam
            id lorem eu nisl pellentesque semper. Nullam tincidunt metus
            placerat, suscipit leo ut, tempus nulla. Fusce at eleifend tellus.
            Ut eleifend dui nunc, non fermentum quam placerat non. Etiam
            venenatis nibh augue, sed eleifend justo tristique eu
          </p>
          <div className="btns">
            <a href="#">
              explore now<span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stats-content">
          <div className="section_title">years statistics</div>
          <p className="stats_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis vulputate eros, iaculis consequat nisl. Nunc et suscipit urna.
            Integer elementum orci eu vehicula pretium. Donec bibendum tristique
            condimentum. Aenean in lacus ligula.
          </p>
        </div>

        <div className="stats_years">
          <div className="stats_years_last">2020</div>
          <div className="stats_years_new float-right">2021</div>
        </div>

        <div className="stats_content">
          <div className="stats_item">
            <div className="stats_last">
              <div className="stats_last_icon">
                <img src={stats_1} alt="" />
              </div>
              <div className="stats_last_content">
                <div className="stats_number">1642</div>
                <div className="stats_type">Clients</div>
              </div>
            </div>
            <div className="stat_bar"></div>
            <div className="stats_new">
              <div className="stats_new_content">
                <div className="stats_number1">3527</div>
                <div className="stats_type1">Clients</div>
              </div>
              <div className="stats_new_icon">
                <img src={stats_1} alt="" />
              </div>
            </div>
          </div>
          <div className="stats_item">
            <div className="stats_last">
              <div className="stats_last_icon1">
                <img src={stats_2} alt="" />
              </div>
              <div className="stats_last_content1">
                <div className="stats_number">768</div>
                <div className="stats_type">Returing Clients</div>
              </div>
            </div>
            <div className="stat_bar"></div>
            <div className="stats_new">
              <div className="stats_new_content1">
                <div className="stats_number1">145</div>
                <div className="stats_type1">Returing Clients</div>
              </div>
              <div className="stats_new_icon1">
                <img src={stats_2} alt="" />
              </div>
            </div>
          </div>
          <div className="stats_item">
            <div className="stats_last">
              <div className="stats_last_icon">
                <img src={stats_3} alt="" />
              </div>
              <div className="stats_last_content">
                <div className="stats_number">11546</div>
                <div className="stats_type">Reach</div>
              </div>
            </div>
            <div className="stat_bar"></div>
            <div className="stats_new">
              <div className="stats_new_content">
                <div className="stats_number1">9321</div>
                <div className="stats_type1">Reach</div>
              </div>
              <div className="stats_new_icon">
                <img src={stats_3} alt="" />
              </div>
            </div>
          </div>
          <div className="stats_item">
            <div className="stats_last">
              <div className="stats_last_icon">
                <img src={stats_4} alt="" />
              </div>
              <div className="stats_last_content">
                <div className="stats_number">3926</div>
                <div className="stats_type">More Items</div>
              </div>
            </div>
            <div className="stat_bar"></div>
            <div className="stats_new">
              <div className="stats_new_content">
                <div className="stats_number1">17429</div>
                <div className="stats_type1">More Items</div>
              </div>
              <div className="stats_new_icon">
                <img src={stats_4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimony_section">
        <div className="heading_section">
          <span className="subheading1">Testimonial</span>
          <h2 className="subheading">Traveller Feedback</h2>
        </div>
        <Slider {...settings}>
          <div className="item_test1">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item_test2">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item_test3">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item_test4">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item_test5">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="item_test6">
            <div className="testimony">
              <div className="testimony_text">
                <p className="star">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </p>
                <p className="testi_para">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="user_test">
                <div className="user_image">
                  <img src={person1} alt="" />
                </div>
                <div className="user_name">
                  <p className="name">Roger scott</p>
                  <p className="desti">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="hero">
        <div className="hero_content">
          <div className="sub_border">
            <p className="hero_subtitle">WORDS FROM</p>
          </div>
          <p className="hero_title">MR.VIKASH MANOHARAN CEO, FOUNDER</p>
          <p className="hero_desc">
            Founded in August of 2018, TourOn has since planned and lead more
            than 200 dream tours. Vikash Manoharan, Founder of TourOn, is a
            travel enthusiast and found TourOn to help others realize their
            wanderlust goals. Vikash used to work in the IT industry until one
            day he realized, a life confined to a desk is not one for him.
            TourOn took wings out of his passion for travel and has grown
            through his ideas as an experienced traveler.
          </p>
        </div>
        <div className="hero_image">
          <img
            src="https://touron.in/assets/frontend/images/homepage/about-us-2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="team">
        <h2 className="title_name">Our Team</h2>
        <p className="title_desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          debitis fugit tempora, in, officiis dolorum asperiores temporibus
          tempore dolores sapiente doloribus reiciendis modi reprehenderit quis
          minus unde minima! Dignissimos, in?
        </p>
        <div className="team_content">
          <div className="team_content1">
            <div className="team_img">
              <img src={team3} alt="" />
            </div>
            <div className="teamk">
              <div className="team_name">CEO, Co-Founder</div>
              <div className="team_desti">Vince Richardson</div>
            </div>
          </div>
          <div className="team_content1">
            <div className="team_img">
              <img src={team1} alt="" />
            </div>
            <div className="teamk">
              <div className="team_name">CTO, Co-Founder</div>
              <div className="team_desti">Jean Loven</div>
            </div>
          </div>
          <div className="team_content1">
            <div className="team_img">
              <img src={team2} alt="" />
            </div>
            <div className="teamk">
              <div className="team_name">Marketer, Co-Founder</div>
              <div className="team_desti">Jeff Stark</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
