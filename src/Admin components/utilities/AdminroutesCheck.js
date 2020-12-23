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
  ];

  let isAdminRoute = adminRoutes.includes(pathname);
  return isAdminRoute;
};
