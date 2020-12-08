import { auth, firedb } from "../firebase";

export const storeAuthToken = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("authToken", JSON.stringify(user));
  }
};

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
export const storeadmintoken = (adminToken) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("adminToken", JSON.stringify(adminToken));
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

export const getUserData = (uid) => {
  firedb.ref(`userGeneralInfo/${uid}`).on("value", (data) => {
    if (data.val() !== null) {
      let val = data.val();
      console.log("val :>> ", val);
      if (val.admin == true) {
        storeadmintoken(val.admin);
      }
      console.log(val.admin, "admin");
    }
  });
};
