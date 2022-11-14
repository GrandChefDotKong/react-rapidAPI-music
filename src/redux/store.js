import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './services/shazamCore';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath] : shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddeleware) => getDefaultMiddeleware().concat(shazamCoreApi.middleware),
});
