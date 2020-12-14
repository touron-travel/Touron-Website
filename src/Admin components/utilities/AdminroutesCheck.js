export const setAdminRoute = (pathname) => {
  let adminRoutes = [
    "/admindashboard",
    "/adminpage",
    "/profile",
    "/profile/user-details",
    "/profile/my-requests",
    "/profile/saved-tours",
    "/profile/my-plans",
    "/profile/myvisa-requests",
    "/profile/faq",
    "/profile/support",

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
