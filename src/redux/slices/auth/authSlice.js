import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isSignInM: false,
  isSignUpM: false,
  authUser: {
    email: null,
    token: null,
    id: null,
    nickname: null,
    bg: null,
    img: null,
    status: null,
  },

  login: "",
  pass: "",
  nickname: "",
  confirmPass: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSignInM: (state, action) => {
      state.isSignInM = action.payload;
      state.login = "";
      state.pass = "";
    },
    setIsSignUpM: (state, action) => {
      state.isSignUpM = action.payload;
      state.login = "";
      state.pass = "";
      state.nickname = "";
      state.confirmPass = "";
    },
    switchM: (state, action) => {
      state.isSignInM = action.payload.in;
      state.isSignUpM = action.payload.up;
      state.login = "";
      state.pass = "";
      state.nickname = "";
      state.confirmPass = "";
    },

    setLogin: (state, action) => {
      state.login = action.payload;
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
  },
});

export const {
  setIsSignInM,
  setIsSignUpM,
  switchM,
  setConfirmPass,
  setLogin,
  setNickname,
  setPass,
} = authSlice.actions;

export const authSel = state => state.auth;

export default authSlice.reducer;
