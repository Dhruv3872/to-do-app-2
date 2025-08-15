import axios from "axios";
import { useDispatch } from "react-redux";
import { saveToDos } from "../store/slices/todos/todosSlice";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GET_USER_TODOS_ENDPOINT = import.meta.env.VITE_API_GET_USER_TODOS_ENDPONT;
function useToDos() {
  const dispatch = useDispatch();
  const API_FETCHTODOS_URL = API_BASE_URL.concat(GET_USER_TODOS_ENDPOINT);

  const fetchAndSaveToDos = async () => {
    console.log("inside fetch and save..");
    const resp = await axios.get(API_FETCHTODOS_URL);
    // console.log(resp.data); // to-dos.
    console.log(resp.data["todos"]);
    // console.log(resp.data["todos"][0]);
    dispatch(saveToDos(resp.data["todos"])); // save to-dos from the todos object.
  };

  /*   const storeToDos = (todos_object) => {
    dispatch(saveToDos(todos));
  }; */
  return { fetchAndSaveToDos };
}

export default useToDos;
