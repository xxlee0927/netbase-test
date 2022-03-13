import { configureStore } from "@reduxjs/toolkit";
import tab from "./tab";
import terms from "./terms";

const store = configureStore({
  reducer: {
    tab,
    terms
  }
});

export default store;
