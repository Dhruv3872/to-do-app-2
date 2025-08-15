# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added `redux`, `react-redux`, and `@reduxjs/toolkit` packages to incorporate  
  Redux state management in our app.
- Created and initialised a Redux store with an empty `reducer` object.
- Provided the store to the entire app by wrapping the `Provider` component  
  offered by `react-redux` around the `App` component.
- Renamed a redundant service to `useToDos` to put To-Dos related functions in there.
