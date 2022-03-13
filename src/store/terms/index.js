import { createSlice } from "@reduxjs/toolkit";
import termsData from "./terms.json";

const initialState = {
  data: termsData
};

export const termsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {}
});

// Action creators are generated for each case reducer function
export const { setCurrentTab, hideTab } = termsSlice.actions;

export default termsSlice.reducer;
