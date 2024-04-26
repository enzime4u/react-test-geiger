import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice';
import alertSlice from './alertSlice';

const store = configureStore({
  reducer: {
    newsLetter: formSlice,
    alert: alertSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
