import React from "react";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export const ProfileSidebarData = [
  {
    title: "User Profile",
    path: "/user-details",
    icon: <RiIcons.RiAccountCircleFill color="#EA7773" size={20} />,
    className: "sidebar-text",
  },
  {
    title: "My Request",
    path: "/my-requests",
    icon: <BsIcons.BsFillChatSquareQuoteFill color="#E74292" size={20} />,
    className: "sidebar-text",
  },
  {
    title: "Saved Tours",
    path: "/saved-tours",
    icon: <AiIcons.AiFillHeart color="#FF3031" size={20} />,
    className: "sidebar-text",
  },
  {
    title: "My Visa Requests",
    path: "/myvisa-requests",
    icon: <RiIcons.RiVisaFill color="blue" size={20} />,
    className: "sidebar-text",
  },

  {
    title: "Self Planned Tours",
    path: "/my-plans",
    icon: <AiIcons.AiOutlineTag color="red" size={20} />,
    className: "sidebar-text",
  },
  {
    title: "Faq",
    path: "/faq",
    icon: <FcIcons.FcFaq color="green" size={20} />,
    className: "sidebar-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <FcIcons.FcOnlineSupport color="black" size={20} />,
    className: "sidebar-text",
  },
];
