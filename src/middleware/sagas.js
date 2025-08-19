import { call, put, takeLatest } from "redux-saga/effects";
import fetchUserToDos from "../services/ToDoService";
import { saveToken, authenticateUser } from "../services/AuthService";
import { saveToDos } from "../store/slices/todos/todosSlice";
import { showMessage } from "../store/slices/message/messageSlice";
import { saveUser } from "../store/slices/user/userSlice";

function* fetchAndSaveUserToDos(action) {
  const todos = yield call(fetchUserToDos, action.payload);
  yield put(saveToDos(todos));
}

function* processLoginRequest(action) {
  try {
    const resp = yield call(authenticateUser, action.payload); // where
    // action.payload would be `inputFields`.
    console.log(resp.data);
    // If the above call succeeds, dispatch 'LOGIN_USER_SUCCEEDED' action:
    // yield put({ type: "LOGIN_USER_SUCCEEDED", resp: resp });
    // Save the token in the local storage and save the username in the user state slice:
    saveToken(resp.data.accessToken);
    yield put(saveUser({ username: resp.data.username }));
  } catch (e) {
    // otherwise, dispatch 'LOGIN_USER_FAILED' action:
    // yield put({ type: "LOGIN_USER_FAILED", message: e.message });
    yield put(showMessage({ message: e.message, severity: "error" }));
  }
}

function* mySaga() {
  yield takeLatest("USER_TODOS_FETCH_REQUESTED", fetchAndSaveUserToDos);
  yield takeLatest("USER_LOGIN_REQUESTED", processLoginRequest);
}

export default mySaga;
