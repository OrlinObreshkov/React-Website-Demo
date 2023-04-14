import { createSlice } from "@reduxjs/toolkit";

const initialState = { mobileNav: "show-nav-mobile" };

const mobileNavReducer = createSlice({
  name: "mobile-navbar",
  initialState: initialState,
  reducers: {
    mobileNavOpen(state) {
      state.mobileNav = "show-nav-mobile";
    },

    mobileNavClose(state) {
      state.mobileNav = '';
    },
  },
});

export const mobileNavActions = mobileNavReducer.actions;
export default mobileNavReducer.reducer;
