import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [], // An object containing empty array named 'todos' as the initial state.
  reducers: {
    // Save the fetched to-dos in the state slice:
    saveToDos: (state, action) => {
      const todos_array = []; // Begin with an empty array instead of using the initial state.
      // Loop through the action payload:
      for (let i = 0; i < action.payload.length; i++) {
        // Add the current to-do to the todos_array array by accessing the 'todo' property of the current todo object:
        todos_array.push(action.payload[i].todo);
      }
      // Replace the state slice with todos_array:
      return todos_array;
    },
    addToDo: (state, action) => {
      console.log(action.payload);
      // Add the given to-do to the state slice:
      state.push(action.payload);
    },
    deleteToDo: (state, action) => {
      // Replace the state slice with the filtered array:
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { saveToDos, getToDos, addToDo, deleteToDo } = todosSlice.actions;

export default todosSlice.reducer;
