import {configureStore} from '@reduxjs/toolkit';

import userReducer from './user';
import missionReducer from './mission';
import characterReducer from './character';
import backgroundReducer from './background';
import haveBackgroundReducer from './haveBackground';

const store = configureStore({
  reducer: {
    user: userReducer,
    mission: missionReducer,
    character: characterReducer,
    backgroundNumber: backgroundReducer,
    haveBackground: haveBackgroundReducer,
  },
});

export default store;
