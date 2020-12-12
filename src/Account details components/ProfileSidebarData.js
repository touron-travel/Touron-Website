import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";

export const ProfileSidebarData = [
  {
    title: "User Profile",
    path: "/user-details",
    icon: <AiIcons.AiFillDashboard color="pink" size={15} />,
    className: "sidebar-text",
  },
  {
    title: "My Request",
    path: "/my-requests",
    icon: <SiIcons.SiGoogletagmanager color="yellow" size={15} />,
    className: "sidebar-text",
  },
  {
    title: "Saved Tours",
    path: "/saved-tours",
    icon: <VscIcons.VscPackage color="grey" size={15} />,
    className: "sidebar-text",
  },
  {
    title: "My Visa Requests",
    path: "/myvisa-requests",
    icon: <FaIcons.FaBlogger color="blue" size={15} />,
    className: "sidebar-text",
  },

  {
    title: "Self Planned Tours",
    path: "/my-plans",
    icon: <AiIcons.AiOutlineTag color="red" size={15} />,
    className: "sidebar-text",
  },
  {
    title: "Faq",
    path: "/faq",
    icon: <AiIcons.AiOutlineTag color="green" size={15} />,
    className: "sidebar-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <AiIcons.AiOutlineTag color="black" size={15} />,
    className: "sidebar-text",
  },
];
