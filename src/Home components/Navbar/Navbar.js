import React, { useState, useEffect } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assests/logo2.png";
// import { BiUserCircle } from "react-icons/bi";
import { GrTextAlignCenter } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import { isAuthenticated, signout } from "../../Login components/auth";
import Dropdown from "./Dropdown";

const Navbar = ({ history }) => {
  const [dropdown, setDropdown] = useState(false);

  const [navHide, setNavHide] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  const handleNavHide = () => setNavHide(!navHide);
  const onDropdownClick = () => {
    setNavHide(false);
    setDropdown(!dropdown);
  };
  const onNavHide = () => {
    if (window.innerWidth > 970) {
      setNavHide(true);
      setDropdown(false);
    }
    setClicked(false);
  };

  useEffect(() => {
    if (window.innerWidth < 970) {
      setNavHide(false);
    }
  }, []);
  return (
    <>
      <div className="menu-icon">
        <GrTextAlignCenter
          onClick={handleNavHide}
          color="#ff7f00"
          style={{ fontSize: "45px", paddingRight: "20px" }}
        />
        {isAuthenticated() && (
          <RiAccountCircleFill
            color="#ff7f00"
            style={{ fontSize: "25px" }}
            onClick={onDropdownClick}
          />
        )}
        {dropdown && <Dropdown />}
      </div>
      <nav className={navHide ? "NavbarItems hide" : "NavbarItems"}>
        <div className="hamburger" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <div className="navbar-logo">
          <img src={Logo} alt="" />
        </div>

        <ul className={clicked ? "nav-menus open" : "nav-menus"}>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/how-it-works"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              How it Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              Destination Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visa"
              className="nav-links"
              activeClassName="selected"
              onClick={onNavHide}
            >
              Visa Request
            </NavLink>
          </li>
          {!isAuthenticated() && (
            <li>
              <NavLink
                to="/login"
                className="nav-links"
                activeClassName="selected"
                onClick={onNavHide}
              >
                Login/SignUp
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
    // <nav>
    //   <div className="logo">
    //     <img src={Image} alt="" />
    //   </div>
    //   <div className="hamburger" onClick={() => setNavOpen(!navOpen)}>
    //     <i className={navOpen ? "fas fa-times" : "fas fa-bars"}></i>
    //   </div>
    //   <ul className={navOpen ? "nav-links open" : "nav-links"}>
    //     <li>
    //       <NavLink
    //         exact
    //         to="/"
    //         className={navOpen ? "nav-links_items fade" : "nav-links_items"}
    //         onClick={() => setNavOpen(false)}
    //         activeClassName="selected"
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/about"
    //         className={navOpen ? "nav-links_items fade" : "nav-links_items"}
    //         activeClassName="selected"
    //         onClick={() => setNavOpen(false)}
    //       >
    //         About
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/how-it-works"
    //         className="nav-links_items"
    //         activeClassName="selected"
    //         onClick={() => setNavOpen(false)}
    //       >
    //         How it Works
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/contact"
    //         className="nav-links_items"
    //         activeClassName="selected"
    //         onClick={() => setNavOpen(false)}
    //       >
    //         Contact
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/destination"
    //         className="nav-links_items"
    //         activeClassName="selected"
    //         onClick={() => setNavOpen(false)}
    //       >
    //         Destination Guide
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/visa"
    //         className="nav-links_items"
    //         activeClassName="selected"
    //         onClick={() => setNavOpen(false)}
    //       >
    //         Visa Request
    //       </NavLink>
    //     </li>
    //     {!isAuthenticated() && (
    //       <li>
    //         <NavLink
    //           to="/login"
    //           className="nav-links_items"
    //           activeClassName="selected"
    //           onClick={() => setNavOpen(false)}
    //         >
    //           Login/Register
    //         </NavLink>
    //       </li>
    //     )}

    //     {isAuthenticated() && (
    //       <li>
    //         <span
    //           className="signoutSpan"
    //           onClick={() => {
    //             signout(() => {
    //               history.push("/");
    //             });
    //             setNavOpen(false);
    //           }}
    //         >
    //           Signout
    //         </span>
    //       </li>
    //     )}

    //     {isAuthenticated() && (
    //       <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    //         <NavLink
    //           to="/profilepage"
    //           className="nav-links_items"
    //           activeClassName="selected"
    //           onClick={() => setNavOpen(false)}
    //         >
    //           <BiUserCircle />
    //         </NavLink>
    //         {dropdown && <Dropdown />}
    //       </li>
    //     )}
    //   </ul>
    // </nav>
  );
};

// export default Navbar;

export default withRouter(Navbar);
