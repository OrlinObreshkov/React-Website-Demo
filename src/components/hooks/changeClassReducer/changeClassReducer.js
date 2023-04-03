import { createSlice } from "@reduxjs/toolkit";

const initialState = { className: "hero-image-container" };

const changeClassReducer = createSlice({
  name: "class",
  initialState: initialState,
  reducers: {
    changeClass(state, action) {
      state.className = action.payload;
    },
  },
});

export const changeClassReducerActions = changeClassReducer.actions;
export default changeClassReducer.reducer;
