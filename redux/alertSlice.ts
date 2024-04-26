import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  message: string;
  isVisible: boolean;
}

const initialState: AlertState = {
  message: "",
  isVisible: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload;
      state.isVisible = true;
    },
    hideAlert: (state) => {
      state.message = "";
      state.isVisible = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export default alertSlice.reducer;
