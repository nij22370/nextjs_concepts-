// src/app/component/counter/Counter.tsx
"use client"; // first line

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/app/state/store";
import {
  Increment,
  Decrement,
  IncrementByAmount,
  IncrementAsync,
} from "@/app/state/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>Count: {count}</h2>
      <div className="flex gap-2 mt-2">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => dispatch(IncrementAsync(10))}
        >
          Increment
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => dispatch(Decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
