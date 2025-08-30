# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Used `react-router`'s `Outlet` and `useLocation` to render the `Header`  
  component for all protected routes and to render the child components as  
  children, and to remove repeatability from the `App` component,  
  and to show a proper title in the header according to the route  
  being rendered.
- Fixed the position of the `AppBar` at the top of all the protected routes.
- Provided necessary styles to the `Header` component to make sure that the  
  title stays at the left end and the dropdown menu stays at the right end  
  of the viewport.
- Made provision to send access token for authentication with `getToDos`  
  request inside `fetchUserToDos` function under `ToDoService.js`.
