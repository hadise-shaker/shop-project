import { useHistory } from "react-router-dom";

export const isLoggedIn = () => {
  /*
   * Check if user is logged in and has token
   */
  if (localStorage.getItem("token")) {
    return true;
  }

  return false;
};

export const Logout = () => {
  /*
   * Clear localStorage
   */

  localStorage.clear();
  window.location.reload();
  /*   history.push("/home"); */
};
