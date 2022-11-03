import {configureStore, createSlice} from '@reduxjs/toolkit';

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
  },
});

export const userObjectActions = userObjectSlice.actions;

export default store;
