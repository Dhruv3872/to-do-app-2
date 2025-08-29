# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Initiated a `Members` component and added its route in `App.jsx`.
- Added `DropDown` `mui Menu` component to the Dashboard page. We'll move  
  this logic to a more sensible `ProtectedRoutes` component since the `AppBar`  
  is supposed to be common for all the protected routes.
- Since the logout action is a part of the `DropDown` component, we removed  
  logout-related code from `Dashboard` component.
- Added a lot of code to `DropDown` component to make it somewhat work.  
  Theme icons still don't work.
- Added code to reset the redux app state upon logout using `RESET_APP` action  
  triggering the change of the app state to `undefined` in the combined reducer  
  created in redux `store.js` using `combineReducers` function offered by  
  `reduxjs/toolkit` package.
