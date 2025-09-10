# to-do app:

- A most basic version of a react-router app to showcase using react-router as framework with the following features:
  - React Redux
  - Redux Saga
  - Authentication
  - Axios
  - Mock Adapter
  - Exception handling

## Changes introduced in this commit:

- Added constants for actions we're watching in our Saga to avoid using string literals  
  at multiple places to avoid mistakes made while typing.
- Added `Visibility` and `VisibilityOff` icons to the `Password` `mui TextField`  
  and some necessary code in the `LoginForm` component to enable the user to see/hide  
  the password they type.
- Created `Loading` component to show `mui CircularProgress` component until  
  the background tasks are resolved; Created a `loadingSlice` to make the loading  
  serve its purpose appropriately throughout the app; Added the `loadingReducer`  
  in the list of `combinedReducers` in the `store`; Set the state slice value in  
  the Saga at the beginning of the parallel tasks to-do list fetching and  
  quote fetching and at the end of their resolution.
- Used the `Loading` component in the `Dashboard` component.
- Added user role below the username in the `DropDown` component.
- Added Home button in the `Header` component to navigate to the Dashboard page from  
  any protected page.
- Created a `dispatchAction` inside a new service file `dispatchService` to enable  
  non-react code to dispatch actions to the `redux` store.
- Shifted functions like `saveToken`, `getToken`, `deleteToken`, `logout`, `getUser` to  
  `AuthService` from `useAuth` hook so that we can call `getUser` function from within  
  our Saga, or, from anywhere else within our JavaScript code, for that matter.
