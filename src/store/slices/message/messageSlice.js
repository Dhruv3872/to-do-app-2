import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  open: false,
  message: "",
  severity: "info",
};
export const messageSlice = createSlice({
  name: "message",
  initialState: initialStateValue,
  reducers: {
    showMessage: (state, action) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.open = true;
    },
    resetMessage: () => initialStateValue,
  },
});

export const { showMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
