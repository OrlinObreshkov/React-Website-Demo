import { createSlice } from "@reduxjs/toolkit";

const initialState = { className: "hero-image-container" };

const changeClassReducer = createSlice({
  name: "class",
  initialState: initialState,
  reducers: {
    reduceHeroImage(state) {
      state.className = 'small-hero'
    },

    originalHeroImage(state) {
      state.className = 'hero-image-container'
    }
  },
});

export const changeClassReducerActions = changeClassReducer.actions;
export default changeClassReducer.reducer;
