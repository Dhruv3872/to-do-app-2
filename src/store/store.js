import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "../middleware/sagas";
import todosReducer from "./slices/todos/todosSlice";
import userReducer from "./slices/user/userSlice";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Then, run the Saga:
sagaMiddleware.run(mySaga);
