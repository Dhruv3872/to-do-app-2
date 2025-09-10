import { put, takeLatest, call, fork, join } from "redux-saga/effects";
import { fetchUserToDos } from "@/services/todoService";
import { saveToken, authenticateUser, getUser } from "@/services/authService";
import { fetchOneRandomQuote } from "@/services/quoteService";
import { saveToDos } from "@/store/slices/todos/todosSlice";
import { showMessage } from "@/store/slices/message/messageSlice";
import { saveUser } from "@/store/slices/user/userSlice";
import { saveQuote } from "@/store/slices/quote/quoteSlice";
import { setLoading } from "@/store/slices/loading/loadingSlice";
import {
  USER_LOGIN_REQUESTED,
  USER_TODOS_AND_QUOTE_FETCH_REQUESTED,
} from "@/constants";

function* fetchARandomQuote() {
  const quote_object = yield call(fetchOneRandomQuote);
  console.log(quote_object.author);
  yield put(saveQuote(quote_object));
}

function* fetchAndSaveUserToDos(action) {
  const todos = yield call(fetchUserToDos, action.payload); // Blocking.
  // We are sending {userId: value} object to the `fetchUserToDos` function.
  yield put(saveToDos(todos)); // Non-blocking.
}

function* fetchUserToDosAndAQuote(action) {
  // Set and keep `loading` state true until the API calls are resolved:
  yield put(setLoading(true));
  console.log("inside fetchUserToDosAndAQuote." + action.payload);
  // The action.payload is {userId: value}.
  const task1 = yield fork(fetchAndSaveUserToDos, action);
  const task2 = yield fork(fetchARandomQuote);
  yield join(task1); // Wait for `task1` to resolve before terminating the Saga.
  yield join(task2); // Wait for `task2` to resolve before terminating the Saga.
  yield put(setLoading(false));
}

function* processLoginRequest(action) {
  try {
    console.log("Inside processLoginRequest generator function.");
    const resp = yield call(authenticateUser, action.payload); // Blocking.
    // action.payload would be `inputFields`.
    const loginResponseData = resp.data;
    console.log(loginResponseData.id);
    // The following code runs upon success response from the Axios call made inside the
    // authenticateUser function:
    // Save the token in the local storage and save the username in the user state slice:
    yield call(saveToken, loginResponseData.accessToken); // Blocking. We did this because
    // the following call uses the token from the local storage to make the `getUser` API call.
    const task1 = yield fork(getUser); // Non-blocking.
    // Save user id and username to the App state. We'll use user id to make the next API call,
    // i.e., fetchUserToDos since the user lands on the Dashboard page which needs to render user To-Dos.
    yield put(
      saveUser({
        id: loginResponseData.id,
        username: loginResponseData.username,
      })
    ); // Non-blocking.
    yield join(task1); // Wait for the call to complete.
  } catch (e) {
    //AxiosError or some other app error:
    // Show the error message to the user using `GlobalMessage` component:
    yield put(showMessage({ message: e.message, severity: "error" })); // Non-blocking.
  }
}

function* mySaga() {
  yield takeLatest(USER_LOGIN_REQUESTED, processLoginRequest); // Non-blocking.
  yield takeLatest(
    USER_TODOS_AND_QUOTE_FETCH_REQUESTED,
    fetchUserToDosAndAQuote
  ); // Non-blocking.
  // yield takeLatest("GET_USER_REQUESTED", getUser); // Non-blocking.
}

export default mySaga;
