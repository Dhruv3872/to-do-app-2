# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Moved the Dashboard Header code to a separate `Header` component and used it in  
  the `Dashboard` component.
- Added code to make sure that the `AddTask` `mui Dialog` component opens with the  
  `TextField` in focus since the component's `autoFocus` prop isn't working for some reason.
