# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Installed `redux-saga` package.
- Converted `useToDos` hook to `ToDoService` `JavaScript` file in order to use it  
  in our `Saga` for `fetchUserToDos`API call handling.
- Made changes in the `Dashboard` to dispatch appropriate action for fetching to-dos  
  using API calls using our `Saga`.
- Created a `sagas.js` file to create and use a saga for fetching user-related todos.
- Added `sagaMiddleware` in the store.
