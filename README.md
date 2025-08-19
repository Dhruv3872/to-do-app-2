# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added basic Exception handling to the app.
- Implemented more appropriate use of Redux-Saga.
- Added `GlobalMessage` component to show error message to the customer;  
  Added `message` Redux state slice to enable the alert message functionality.
- Added `PublicRoutes` component with the idea of implementing navigation to  
  protected routes if the user is logged in. Still working on it.
-
