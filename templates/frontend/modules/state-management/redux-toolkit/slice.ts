import { createSlice, PayloadAction } from '@reduxjs/toolkit';

{ { #if typescript } }
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};
{ {else } }
const initialState = {
    value: 0,
};
{ {/if } }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
