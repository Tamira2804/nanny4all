import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: null,
    id: null,
    token: null,
  },

  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user.name = payload.displayName;
      state.user.email = payload.email;
      state.isLoggedIn = true;
    },
    logOutUser(state) {
      state.user.name = "";
      state.user.email = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
