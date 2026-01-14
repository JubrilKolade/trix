import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

{ { #if typescript } }
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
{ {/if } }
