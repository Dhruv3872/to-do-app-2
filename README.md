# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added some `emotion` and `mui` packages to style the app.
- Added `react-router` package to provide proper scalable routing to the app.
- Wrapped `App` component around `react-router`'s `BrowserRouter` in `index.jsx`  
  to apply routing using `react-router` for the entire app.
- Added `Routes` to the `App` component including a _catch-all_ route.
- Added `Login` and `LoginForm` components to offer a Login page.
- Added `Register` component to offer a Register page to the user.
