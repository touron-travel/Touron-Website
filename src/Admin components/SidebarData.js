import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: <AiIcons.AiFillDashboard />,
    className: "sidebar-text",
  },
  {
    title: "Management",
    path: "/admin/management",
    icon: <SiIcons.SiGoogletagmanager />,
    className: "sidebar-text",
  },
  {
    title: "Packages/Ideas",
    path: "/admin/packages",
    icon: <VscIcons.VscPackage />,
    className: "sidebar-text",
  },
  {
    title: "Pages/Blogs",
    path: "/admin/pages",
    icon: <FaIcons.FaBlogger />,
    className: "sidebar-text",
  },
  {
    title: "Categories/Tags",
    path: "/admin/categories",
    icon: <AiIcons.AiOutlineTag />,
    className: "sidebar-text",
  },
  {
    title: "Advertisement",
    path: "/admin/advertisement",
    icon: <RiIcons.RiAdvertisementFill />,
    className: "sidebar-text",
  },
  {
    title: "Trending Places",
    path: "/admin/trendingplaces",
    icon: <MdIcons.MdPlace />,
    className: "sidebar-text",
  },
  {
    title: "Coupons",
    path: "/admin/coupons",
    icon: <RiIcons.RiCoupon2Line />,
    className: "sidebar-text",
  },
];
