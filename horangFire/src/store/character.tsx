import {createSlice} from '@reduxjs/toolkit';

export interface charType {
  name: string;
  isDone: boolean;
}

export const charInitialState: charType | null = {
  name: '쿠쿠',
  isDone: false,
};

export const charSlice = createSlice({
  name: 'character',
  initialState: charInitialState,
  reducers: {
    setTodaysMission: (state, action) => {
      state.isDone = action.payload.isDone;
    },
  },
});

export const checkTodaysMission = (state: {character: {isDone: boolean}}) =>
  state.character.isDone;
export const selectName = (state: {character: {name: string}}) =>
  state.character.name;

export const {setTodaysMission} = charSlice.actions;

export default charSlice.reducer;
