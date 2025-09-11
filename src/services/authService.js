import axios from "axios";

import { JWTOKEN } from "@/constants";
import { dispatchAction } from "./dispatchService";
import { navigate } from "./navigationService";

const api_base_url = import.meta.env.VITE_API_BASE_URL;
const api_login_endpoint = import.meta.env.VITE_API_AUTH_LOGIN_ENDPOINT;
const api_getUser_endpoint = import.meta.env.VITE_API_GET_USER_ENDPOINT;

export const saveToken = (token) => {
  window.localStorage.setItem(JWTOKEN, token);
};

export const getToken = () => {
  return window.localStorage.getItem(JWTOKEN);
};

const deleteToken = () => {
  window.localStorage.removeItem(JWTOKEN);
};

export const authenticateUser = async (inputFields) => {
  console.log(inputFields);
  const api_login_url = api_base_url + api_login_endpoint;
  console.log(api_login_url);
  // `try-catch` has been implemented in the saga:
  return await axios.post(api_login_url, inputFields, {
    headers: { "Content-Type": "application/json" },
  });
};

// Log the user out:
export const logout = () => {
  console.log("Executing logout..");
  // Delete the JWT access token from the browser:
  deleteToken();
  // Reset the entire app state:
  dispatchAction({ type: "RESET_APP" });
  navigate("/login");
  // window.location.assign("/login"); // Not the right way of doing things
  // inside a React app.
};

// Get the current user by making an API call to dummyjson with the JWT access token
// by obtaning it from localStorage:
export const getUser = async () => {
  try {
    const token = getToken();

    // If the access token exists in the local storage, go ahead, otherwise, there is no logged in user.
    // Hence, there is no point in making an API call. Return false right away:
    if (token) {
      const api_getUser_url = api_base_url + api_getUser_endpoint;
      const resp = await axios.get(api_getUser_url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 200) {
        console.log("username: ".concat(resp.data.username));
        // A logged-in user exists. Hence, return the user:
        return resp.data; // user JSON object.
      }
      // If the response status was not 200, the user doesn't exist.
      // Log out and return false.
      logout();
      return false;
    }
    // If you have reached here, definitely, a logged-in user does not exist.
    // Log out and return false.
    logout();
    return false;
  } catch (error) {
    // Since the following function contains navigation, the error logging won't work anyways.
    // AxiosError would execute the catch block:
    logout();
  }
};
