# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added `navigationService` to enable using navigation outside  
  React components and hooks using `react-router`'s `useNavigate`.
- Implemented the necessary logic for it in `App.jsx`.
- Used this way of navigation in `authService` for navigation after  
  logout and in `sagas.js` for navigation after login.
