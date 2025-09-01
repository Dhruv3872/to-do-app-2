import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  quote: null,
  author: null,
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState: initialStateValue,
  reducers: {
    saveQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
  },
});

export const { saveQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
