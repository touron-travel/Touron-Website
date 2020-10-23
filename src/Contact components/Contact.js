import React from "react";
import "./Contact.css";
import Navbar from "../Home components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Home components/Footer/Footer";

export default function Contact() {
  return (
    <div className="contact">

      <div className="contact_top">
        <div className="nav">
          <Navbar/>
        </div>
      </div>
      <div className="contact_img">
        <div className="contact_title">
             <p className="breadcrumbs"><span className="mr-2"><Link className="linkin" to="/">Home <i className="fa fa-chevron-right"></i></Link></span><span className="abt">Contact us <i className="fa fa-chevron-right"></i></span></p>
             <h1 className="mb-0 bread">Contact Us</h1>
        </div>
       </div>

       <div className="address">
         <div className="add">
         <div className="icon">
           <i className="fa fa-compass"></i>
         </div>
         <h3 className="connect">Address</h3>
         <p className="locate">tour On Holidays,Workafella, Rathha Towers,
              Tek Meadows - A Block,
               4th Floor, Opposite to Accenture,
               Sholinganallur, OMR,
              Chennai-119</p>
         </div>
         <div className="add">
         <div className="icon">
           <i className="fa fa-phone"></i>
         </div>
         <h3 className="connect">Contact Number</h3>
         <p className="locate">+91 86678 01206</p>
         </div>
         <div className="add">
         <div className="icon">
           <i className="fa fa-envelope"></i>
         </div>
         <h3 className="connect">Email Address</h3>
         <p className="locate">hello@touron.in</p>
         </div>
       </div>

       <div className="contact_information">
        
        <div className="contact_info">
         <div className="contact_head">
           <h1>Get in Touch</h1>
         </div>
        <div className="contact_form">
         <div className="form-group">
           <input type="text" className="form-control" placeholder="Your Name"/>
         </div>
         <div className="form-group">
           <input type="text" className="form-control" placeholder="Mobile number"/>
         </div>
         <div className="form-group">
           <input type="text" className="form-control" placeholder="Email address"/>
         </div>
         <div className="form-group">
           <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder="Message" />
        </div>
        <div>
          <button type="submit" className="butto">Send Message</button>
        </div>      
        </div>
        </div>

        <div className="contact_map">
          <h3>Map</h3>
        </div>

       </div>
          
      
        

         
        <div className="footer">
          <Footer />
        </div>
         

       

    </div>
  )
}
