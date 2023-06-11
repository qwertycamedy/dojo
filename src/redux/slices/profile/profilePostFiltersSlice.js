import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  sortBy: 'desc',
  sortOptions: [
    {
      value: "asc",
      body: "By Date ASC",
    },
    {
      value: "desc",
      body: "By Date DESC",
    },
  ],
};

const profilePostFiltersSlice = createSlice({
  name: "profilePostFilters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSortBy: (state,action)=> {
        state.sortBy = action.payload;
    }
  },
});

export const { setSearchValue, setSortBy } = profilePostFiltersSlice.actions;

export const profilePostFiltersSel = state => state.profilePostFilters;

export default profilePostFiltersSlice.reducer;
