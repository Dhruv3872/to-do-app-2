# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Reduced the minimum height of the HTML body element in `index.css`to  
  avoid vertical scrolling. This is because I don't know why the need  
  for vertical scrolling arises otherwise.
- Added a quote as a footer on Dashboard to implement `redux-saga fork` and `join` functionality.  
  Then found out that `getUser` API is call is anyways needed even after login to obtain  
  the user role info, which would mean that `fetchUserToDos` and `getUser` API calls  
  could have been forked and joined as well deeming `getQuote` redundant to showcase  
  the fork and join functionalities; Saved the quote in the `redux` app state.
