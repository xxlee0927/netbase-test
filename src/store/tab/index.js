import { createSlice } from "@reduxjs/toolkit";
import { TAB } from "@/constants/tab";

const initialState = {
  currentTab: TAB.all,
  shouldShow: true
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
    hideTab: (state) => {
      state.shouldShow = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setCurrentTab, hideTab } = tabSlice.actions;

export default tabSlice.reducer;
