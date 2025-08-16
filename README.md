# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Created a user state slice to save the user details received from the server  
  so that user-relevant to-do list can be fetched from the server using `userId`.
- Created `AddTask` mui `Dialog` component to add a task to the list of tasks;  
  Added this component in the `Dashboard` component and made arrangements to ensure  
  proper opening and closing of the dialog.
- Solved the error preventing the tasks from appearing as a dynamic list using  
  mui `List` component on the dashboard.
