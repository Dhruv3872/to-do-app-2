import axios from "axios";
import { useNavigate } from "react-router";

function useAuth() {
  const navigate = useNavigate();
  const api_base_url = import.meta.env.VITE_API_BASE_URL;

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

  return {
    register,
  };
}

export default useAuth;
