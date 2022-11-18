import {createSlice} from '@reduxjs/toolkit';

const haveBackground: number[] = [];

export const haveBackgroundSlice = createSlice({
  name: 'haveBackground',
  initialState: haveBackground,
  reducers: {
    setHaveBackground: (state, action) => {
      return action.payload;
    },
  },
});

export const selectHaveBackground = (state: {haveBackground: number[]}) =>
  state.haveBackground;

export const {setHaveBackground} = haveBackgroundSlice.actions;

export default haveBackgroundSlice.reducer;
