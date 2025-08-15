# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added `todosSlice` Redux state slice to dynamically load the user's to-do list  
  after fetching it from the server, to add a new to-do, to delete any given to-do, etc.
- Added the slice reducer to the store.
- Made an API call to the temporarily hard-coded user id's endpoint and saved the  
  obtained to-do list in the state slice in `useToDos` hook.
- Modified `Dashboard` component to run the API call and state actions.
