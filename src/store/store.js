import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import mySaga from "@/middleware/sagas";
import todosReducer from "./slices/todos/todosSlice";
import userReducer from "./slices/user/userSlice";
import messageReducer from "./slices/message/messageSlice";

const combinedReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
  message: messageReducer,
});

// rootReducer will help us put a reset app logic in it so that one action can reset
// the entire app state:
const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    // Reset the entire app state:
    state = undefined; // This causes each of the reducers to reset their state slices
    // to their respective initial states.
  }
  return combinedReducer(state, action);
};
const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Then, run the Saga:
sagaMiddleware.run(mySaga);
