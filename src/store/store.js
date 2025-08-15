import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos/todosSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
  },
});
