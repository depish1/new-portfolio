import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      console.log("xd");
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { toggleMenu, closeMenu } = menuSlice.actions;
