import { call, put, takeLatest } from "redux-saga/effects";
import fetchUserToDos from "../services/ToDoService2";
import { saveToDos } from "../store/slices/todos/todosSlice";

function* fetchAndSaveUserToDos(action) {
  const todos = yield call(fetchUserToDos, action.payload);
  yield put(saveToDos(todos));
}

function* mySaga() {
  yield takeLatest("USER_TODOS_FETCH_REQUESTED", fetchAndSaveUserToDos);
}

export default mySaga;
