import {
  Action,
  Store,
  configureStore,
  ThunkAction,
  // MiddlewareArray,
} from '@reduxjs/toolkit';

import rootReducer, { RootState } from './rootReducer';

const store: Store = configureStore({
  reducer: rootReducer,
  // middleware: new MiddlewareArray().concat(),
  // middleware: [
  //   ...getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: ['common/setOpenDrawer', 'common/setOpenModal'],
  //     },
  //   }),
  // ],
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
