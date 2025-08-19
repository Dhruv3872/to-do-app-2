import axios from "axios";

const api_base_url = import.meta.env.VITE_API_BASE_URL;
const api_login_endpoint = import.meta.env.VITE_API_AUTH_LOGIN_ENDPOINT;

export const saveToken = (token) => {
  window.localStorage.setItem("JWTOKEN", token);
};
export const authenticateUser = async (inputFields) => {
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
