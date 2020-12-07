import { auth } from "../firebase";
export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("authToken")) {
    return JSON.parse(localStorage.getItem("authToken"));
  } else {
    return false;
  }
};
export const isAdmin = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("adminToken")) {
    return JSON.parse(localStorage.getItem("adminToken"));
  } else {
    return false;
  }
};

export const signout = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("authToken");
    localStorage.removeItem("adminToken");
  }
  auth.signOut();
  next();
};

export const storeadmintoken = (adminToken) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("adminToken", JSON.stringify(adminToken));
  }
};
