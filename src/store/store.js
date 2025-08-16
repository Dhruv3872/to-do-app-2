import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todos/todosSlice";
import userReducer from "./slices/user/userSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});
