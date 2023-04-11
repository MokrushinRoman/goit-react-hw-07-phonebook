import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
