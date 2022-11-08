import {configureStore} from '@reduxjs/toolkit';

import userReducer from './user';
import missionReducer from './mission';
import characterReducer from './character';
import backgroundReducer from './background';

const store = configureStore({
  reducer: {
    user: userReducer,
    mission: missionReducer,
    character: characterReducer,
    backgroundNumber: backgroundReducer,
  },
});

export default store;
