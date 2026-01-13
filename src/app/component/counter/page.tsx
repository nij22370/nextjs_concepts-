// src/app/component/counter/page.tsx
"use client"; // must be client if layout is client

import Counter from "./Counter";

export default function CounterPage() {
  return (
    <div className="p-4">
      <h1>Counter Page</h1>
      <Counter />
    </div>
  );
}
