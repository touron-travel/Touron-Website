export const setAdminRoute = (pathname) => {
  let adminRoutes = [
    "/admindashboard",
    "/admin",
    "/admin/management",
    "/admin/packages",
    "/admin/pages",
    "/admin/categories",
    "/admin/advertisement",
    "/admin/trendingplaces",
    "/admin/coupons",
  ];

  let isAdminRoute = adminRoutes.includes(pathname);
  return isAdminRoute;
};
