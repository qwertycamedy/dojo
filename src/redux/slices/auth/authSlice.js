import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuth: false,
    authUser: 'Qwerty Camedy'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
})

// export const {} = authSlice.actions;
export const authSel = state => state.auth

export default authSlice.reducer;