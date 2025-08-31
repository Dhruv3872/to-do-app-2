// This service is supposed to contain API calls and their peripheral processes related to To-Dos:
import axios from "axios";

import { JWTOKEN } from "@/constants";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Complete the API endpoint URL and make a get request to fetch user-related to-dos:
 * @param {*} userId
 * @returns todos
 */
export const fetchUserToDos = async (payload) => {
  // where payload is supposed to be {userId: value}.
  console.log(payload);
  console.log("inside fetchUserToDos.");
  // Get the access token to send it with the getToDos request:
  const token = window.localStorage.getItem(JWTOKEN);
  const GET_USER_TODOS_ENDPOINT =
    import.meta.env.VITE_API_GET_USER_TODOS_ENDPONT.concat(payload.userId);
  const API_FETCH_USER_TODOS_URL = API_BASE_URL.concat(GET_USER_TODOS_ENDPOINT);
  console.log(API_FETCH_USER_TODOS_URL);
  const resp = await axios.get(API_FETCH_USER_TODOS_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return resp.data["todos"];
};

// export default fetchUserToDos;
