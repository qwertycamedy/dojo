import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignInM: false,
  isSignUpM: false,
  authUser: {},

  email: "",
  pass: "",
  nickname: "",
  confirmPass: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsSignInM: (state, action) => {
      state.isSignInM = action.payload;
      state.email = "";
      state.pass = "";
    },
    setIsSignUpM: (state, action) => {
      state.isSignUpM = action.payload;
      state.email = "";
      state.pass = "";
      state.nickname = "";
      state.confirmPass = "";
    },
    switchM: (state, action) => {
      state.isSignInM = action.payload.in;
      state.isSignUpM = action.payload.up;
      state.email = "";
      state.pass = "";
      state.nickname = "";
      state.confirmPass = "";
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPass: (state, action) => {
      state.pass = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
    setConfirmPass: (state, action) => {
      state.confirmPass = action.payload;
    },
    signUser: (state, action) => {
      state.authUser = action.payload;
    },
    signOutUser: (state) => {
      state.authUser = {};
      state.isAuth = false;
    }
  },
});

export const {
  setIsAuth,
  setIsSignInM,
  setIsSignUpM,
  switchM,
  setConfirmPass,
  setEmail,
  setNickname,
  setPass,
  signUser,
  signOutUser,
} = authSlice.actions;

export const authSel = state => state.auth;

export default authSlice.reducer;
