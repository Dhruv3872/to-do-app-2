# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added `axios` package to make API calls.
- Added some code in the `Register` component but we're not moving forward with registering a user.  
  Instead, we decided to use a mock authentication api offered by [dummyJson](https://dummyjson.com/docs/auth).
- Created a custom hook to use as a service named `useAuth` to create and put  
  authentication-related functions like `getToken, saveToken, deleteToken, login, getUser` inside  
  and then use them wherever we want to by importing the hook.
- Made changes to the `LoginForm` component to enable it to make an API call upon form submission and  
  to navigate to the dashboard if the login attempt succeeds; Changed `email` field to `username` in there  
  since our mock API supports username for the sake of simplicity; Used `useAuth`'s `login` function  
  within the component to make a `POST` API call for logging in.
- Initialised a `Dashboard` component to render upon successful login.
- Created another hook named `useMenuAccess` to create and put functions like `validateUser`  
  in there to enable the app to navigate the user to an appropriate route based on their  
  authentication status at any given time. This function is still in progress.
- Added `Dashboard` route to the `App` component to enable navigating to Dashboard.
