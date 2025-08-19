import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {}, // Empty user object
  reducers: {
    // Save the user in the state:
    saveUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
