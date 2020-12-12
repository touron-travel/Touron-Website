export const setAdminRoute = (pathname) => {
  let adminRoutes = [
    "/admindashboard",
    "/adminpage",
    "/profilepage",
    "/user-details",
    "/my-requests",
    "/saved-tours",
    "/my-plans",
    "/myvisa-requests",
    "/faq",
    "/support",

    // "/admin",
    // "/management",
    // "/packages",
    // "/pages",
    // "/categories",
    // "/advertisement",
    // "/trendingplaces",
    // "/coupons",
  ];

  let isAdminRoute = adminRoutes.includes(pathname);
  return isAdminRoute;
};
