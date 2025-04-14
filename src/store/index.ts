import { configureStore } from '@reduxjs/toolkit';
import variablesReducer from './variablesSlice.ts';

export const store = configureStore({
    reducer: {
        variables: variablesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
