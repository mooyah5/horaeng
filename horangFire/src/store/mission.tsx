import {createSlice} from '@reduxjs/toolkit';

export interface missionType {
  mainFile: string;
  mainTxt: string;
  commonFile: string;
  commonTxt: string;
  //   isDone: boolean;
}

export const missionInitialState: missionType | null = {
  mainFile: '',
  mainTxt: '',
  commonFile: '',
  commonTxt: '',
};

export const missionSlice = createSlice({
  name: 'mission',
  initialState: missionInitialState,
  reducers: {
    // setfile(state: null, actions: {type: string; payload: any}) {
    //   return actions.payload;
    // },
    setMainFile: (state, action) => {
      state.mainFile = action.payload.mainFile;
      //   state.txt = action.payload.txt;
    },
    setCommonFile: (state, action) => {
      state.commonFile = action.payload.commonFile;
    },
    reset: state => {
      Object.assign(state, missionInitialState);
    },
  },
});

export const selectMainFile = (state: {mission: {mainFile: string}}) =>
  state.mission.mainFile;
export const selectCommonFile = (state: {mission: {commonFile: string}}) =>
  state.mission.commonFile;

export const {setMainFile, setCommonFile, reset} = missionSlice.actions;

export default missionSlice.reducer;
