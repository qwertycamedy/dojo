import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  authUser: {
    bg: '',
    img: '',
    name: "Qwerty Camedy",
    status: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        cumque alias adipisci aperiam quae minus velit iure totam odio harum
        temporibus nulla mollitia natus, culpa illo beatae. Repellat, ipsum
        magni.`,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const {} = authSlice.actions;
export const authSel = state => state.auth;

export default authSlice.reducer;
