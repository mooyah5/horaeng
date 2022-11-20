import {createSlice} from '@reduxjs/toolkit';

export interface MissionType {
  file: string;
  type: string;
  name: string;
  // txt: string;
}

export const missionInitialState: MissionType | null = {
  file: '',
  type: '',
  name: '',
  // txt: '',
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState: missionInitialState,
  reducers: {
    // setfile(state: null, actions: {type: string; payload: any}) {
    //   return actions.payload;
    // },
    setFile: (state, {payload}) => {
      state.file = payload.file;
      state.type = payload.type;
      state.name = payload.name;
    },
    // setText: (state, action) => {
    //   state.txt = action.payload.txt;
    // },
    reset: state => {
      Object.assign(state, missionInitialState);
    },
  },
});

export const selectFile = (state: {mission: MissionType}) => state.mission;

export const {setFile, reset} = missionSlice.actions;

export default missionSlice.reducer;
