import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    user: (state, action) => {
      state.email = action.payload;
      return state;
    },
  },
});

export const { user } = authSlice.actions;

export default authSlice.reducer;
