import axios from "axios";
import { useNavigate } from "react-router";

function useAuth() {
  const api_base_url = import.meta.env.VITE_API_BASE_URL;
  const api_login_endpoint = import.meta.env.VITE_API_AUTH_LOGIN_ENDPOINT;
  const api_getUser_endpoint = import.meta.env.VITE_API_GET_USER_ENDPOINT;
  const navigate = useNavigate();

  const getToken = () => {
    return window.localStorage.getItem("JWTOKEN");
  };

  const saveToken = (token) => {
    window.localStorage.setItem("JWTOKEN", token);
  };

  const deleteToken = () => {
    window.localStorage.removeItem("JWTOKEN");
  };

  // We're not using this function in our project as of the timing of this writing since
  // we decided not to build and use a node app to implement authentication and instead,
  // to use a third-party free authentication api—in our case, dummyjson.com:
  const register = async (inputFields) => {
    const response = await axios.post(api_base_url.concat("/api/register"), {
      firstName: inputFields.firstName,
      lastName: inputFields.lastName,
      email: inputFields.email,
      password: inputFields.password,
    });
    if (response.status === 201) {
      alert("Account created successfully!");
      navigate("/");
    } else {
      alert("Something went wrong!");
    }
  };

  const login = async (inputFields) => {
    console.log(inputFields);
    const request_body = {
      username: inputFields.username,
      password: inputFields.password,
    };
    console.log(request_body);
    const api_login_url = api_base_url + api_login_endpoint;
    console.log(api_login_url);
    const resp = await axios.post(api_login_url, request_body, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(resp.data);
    saveToken(resp.data.accessToken);
    navigate("/dashboard");
  };

  // Get the current user by making an API call to dummyjson with the JWT access token
  // by obtaning it from localStorage:
  const getUser = async () => {
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
      // Return false.
      return false;
    }
    // If you have reached here, definitely, a logged-in user does not exist. Return false:
    return false;
  };

  return { register, login, getUser };
}

export default useAuth;
