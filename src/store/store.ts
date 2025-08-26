import { configureStore } from '@reduxjs/toolkit';
import mathReducer from './mathSlice';
import progressReducer from './progressSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    math: mathReducer,
    progress: progressReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
