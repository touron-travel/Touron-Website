export const setAdminRoute = (pathname) => {
  let adminRoutes = [
    "/admin",
    "/admin/management",
    "/admin/packages",
    "/admin/pages",
    "/admin/categories",
    "/admin/advertisement",
    "/admin/trendingplaces",
    "/admin/coupons",
    "/profilepage",
  ];

  let isAdminRoute = adminRoutes.includes(pathname);
  return isAdminRoute;
};
