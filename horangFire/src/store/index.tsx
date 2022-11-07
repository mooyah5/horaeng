import {configureStore} from '@reduxjs/toolkit';

import userReducer from './user';
import missionReducer from './mission';
import characterReducer from './character';

const store = configureStore({
  reducer: {
    user: userReducer,
    mission: missionReducer,
    character: characterReducer,
  },
});

export default store;
