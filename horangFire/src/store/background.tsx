import {createSlice} from '@reduxjs/toolkit';

const backgroundNumber = 0;

export const backgroundSlice = createSlice({
  name: 'backgroundNumber',
  initialState: backgroundNumber,
  reducers: {
    setBackgroundNumber: (state, action) => action.payload,
  },
});

export const selectBackgroundNumber = (state: {backgroundNumber: number}) =>
  state.backgroundNumber;

export const {setBackgroundNumber} = backgroundSlice.actions;

export default backgroundSlice.reducer;
