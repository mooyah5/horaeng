import {configureStore, createSlice} from '@reduxjs/toolkit';
// import {composeWithDevTools} from '@reduxjs/toolkit/dist/devtoolsExtension';
import missionReducer from './mission';
import characterReducer from './character';

const authInitialState = null; /** user type */

const userObjectSlice = createSlice({
  name: 'userObject',
  initialState: authInitialState,
  reducers: {
    login(state: null, actions: {type: string; payload: any}) {
      return actions.payload;
    },
    logout() {
      return null;
    },
  },
});

const store = configureStore({
  reducer: {
    userObject: userObjectSlice.reducer,
    mission: missionReducer,
    character: characterReducer,
  },
});

export const userObjectActions = userObjectSlice.actions;
export default store;
