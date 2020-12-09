export const setAdminRoute = (pathname) => {
  let adminRoutes = [
    "/admindashboard",
    "/adminpage",
    "/profilepage",
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
