import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api_base_url = import.meta.env.VITE_API_BASE_URL;
  const api_login_endpoint = import.meta.env.VITE_API_AUTH_LOGIN_ENDPOINT;
  const api_getUser_endpoint = import.meta.env.VITE_API_GET_USER_ENDPOINT;

  const getToken = () => {
    return window.localStorage.getItem("JWTOKEN");
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

  const authenticateUser = async (inputFields) => {
    console.log(inputFields);
    /*     const request_body = {
      username: inputFields.username,
      password: inputFields.password,
    };
    console.log(request_body); */
    const api_login_url = api_base_url + api_login_endpoint;
    console.log(api_login_url);
    // `try-catch` has been implemented in the saga:
    return await axios.post(api_login_url, inputFields, {
      headers: { "Content-Type": "application/json" },
    });

    // console.log(resp.data);
    // saveToken(resp.data.accessToken);
    // navigate("/dashboard");
    // } catch (error) {
    // This block is executed upon error, including AxiosError.
    // console.log(error);
    // }
  };

  /**
   * If the login is successful, the following function will store the received access token
   * in the local storage and then redirect the user to the dashboard page:
   * @param {*} accessToken
   */
  /*  const saveTokenAndNavigateToDashboard = (accessToken) => {
    saveToken(accessToken);
    navigate("/dashboard");
  }; */

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

  // Log the user out:
  const logout = () => {
    // Delete the JWT access token from the browser:
    deleteToken();
    // Reset the entire app state:
    dispatch({ type: "RESET_APP" });
    // Navigate to the login page:
    navigate("/login");
  };

  return {
    register,
    authenticateUser,
    getUser,
    logout,
  };
}

export default useAuth;
