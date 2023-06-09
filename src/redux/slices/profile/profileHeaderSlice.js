import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isStatusShorted: false,
}

export const profileHeaderSlice = createSlice({
    name: 'profileHeader',
    initialState,
    reducers: {
        setIsStatusShorted: (state, action) => {
            state.isStatusShorted = action.payload;
        }
    }
});

export const { setIsStatusShorted } = profileHeaderSlice.actions

export const profileHeaderSel = state => state.profileHeader;

export default profileHeaderSlice.reducer