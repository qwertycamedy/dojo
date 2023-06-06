import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    window: [],
}

export const messagesWindowSlice = createSlice({
    name: 'messagesWindow',
    initialState,
    reducers: {

    }
});

// export const {  } = profileHeaderSlice.actions

export default messagesWindowSlice.reducer