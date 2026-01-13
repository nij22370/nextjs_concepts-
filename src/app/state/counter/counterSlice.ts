import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

/* ✅ Async thunk MUST come first */
export const IncrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (state) => {
      state.value += 1;
    },
    Decrement: (state) => {
      state.value -= 1;
    },
    IncrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  /* ✅ extraReducers is OUTSIDE reducers  you can add may casse  as possibe sy yu want using .addCase*/
  extraReducers: (builder) => {
    builder
      .addCase(IncrementAsync.pending, (_state) => {
        console.log("Increment Async,pending ");
      })
      .addCase(IncrementAsync.fulfilled, (state, action) => {
        state.value += action.payload;
      });
  },
});

export const { Increment, Decrement, IncrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
