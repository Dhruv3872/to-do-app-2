# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added `JWTOKEN` as a constant to the `constants.js` file and  
  used the constant instead of using typing the string value wherever needed.
- Added `Redux-saga`'s `fork` model to implement concurrent API calls for  
  `login` app flow.
