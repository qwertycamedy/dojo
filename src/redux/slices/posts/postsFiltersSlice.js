import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  searchDebValue: "",
  sortBy: "desc",
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

const postsFiltersSlice = createSlice({
  name: "profilePostFilters",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSearchDebValue: (state, action) => {
      state.searchDebValue = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    defaultFilter: (state) => {
      state.searchDebValue = '';
      state.searchValue = '';
      state.sortBy = 'desc';
    }
  },
});

export const { setSearchValue, setSearchDebValue, setSortBy, defaultFilter } =
  postsFiltersSlice.actions;

export const postsFiltersSel = state => state.postsFilters;

export default postsFiltersSlice.reducer;
