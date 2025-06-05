// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './beerSlice';

export const store = configureStore({
    reducer: {
        beer: beerReducer,
    },
});

// Types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
