import axios from "axios";

import { JWTOKEN } from "@/constants";

export const fetchOneRandomQuote = async () => {
  const GET_A_RANDOM_QUOTE_URL = import.meta.env.VITE_API_BASE_URL.concat(
    import.meta.env.VITE_API_GET_A_RANDOM_QUOTE_ENDPOINT
  );
  console.log(GET_A_RANDOM_QUOTE_URL);
  const token = window.localStorage.getItem(JWTOKEN);
  console.log("token: " + token);
  const resp = await axios.get(GET_A_RANDOM_QUOTE_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(resp.data.quote);
  return resp.data; // We'll use the 'quote'and 'author' properties of this object.
};

// export default fetchOneRandomQuote;
