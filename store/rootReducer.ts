import { combineReducers } from '@reduxjs/toolkit';

import common from './slices/common';
import session from './slices/session';

const rootReducer = combineReducers({
  common,
  session,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
