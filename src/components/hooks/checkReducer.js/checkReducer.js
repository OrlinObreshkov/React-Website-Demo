import { createSlice } from "@reduxjs/toolkit";

const initialState = { showForm: false, showLogo: true };

const checkReducerSlice = createSlice({
  name: "checker",
  initialState: initialState,
  reducers: {
    showLoginForm(state) {
      state.showForm = true
      state.showLogo = false
    },

    showLogo(state) {
      state.showForm = false
      state.showLogo = true
    },

    hideLogo(state) {
      state.showLogo = false
    }
  },
});

export const checkReducerSliceActions = checkReducerSlice.actions
export default checkReducerSlice.reducer
