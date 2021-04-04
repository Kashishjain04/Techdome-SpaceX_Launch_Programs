import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    data: [],
    currentFilter: [null, null, null],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCurrentFilter: (state, action) => {
      const { type } = action.payload;
      state.currentFilter[type] = action.payload.value;
    },
    setAllFilters: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});

export const { setData, setCurrentFilter, setAllFilters } = mainSlice.actions;
export const selectData = (state) => state.main.data;
export const selectCurrentFilter = (state) => state.main.currentFilter;
export default mainSlice.reducer;
