import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import videoReducer from '../features/videos/videoSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
    list: searchReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
