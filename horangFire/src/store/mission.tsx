import {createSlice} from '@reduxjs/toolkit';

export interface missionType {
  file: string;
  txt: string;
  //   isDone: boolean;
}

export const missionInitialState: missionType | null = {
  file: '',
  txt: '',
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState: missionInitialState,
  reducers: {
    // setfile(state: null, actions: {type: string; payload: any}) {
    //   return actions.payload;
    // },
    setFile: (state, action) => {
      state.file = action.payload.file;
      //   state.txt = action.payload.txt;
    },
    reset: state => {
      Object.assign(state, missionInitialState);
    },
  },
});

export const selectFile = (state: {mission: {file: string}}) =>
  state.mission.file;

export const {setFile, reset} = missionSlice.actions;

export default missionSlice.reducer;
