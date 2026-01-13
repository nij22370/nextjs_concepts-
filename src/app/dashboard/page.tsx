"use client";
import { useState } from "react";
export default function Dashboaed() {
  console.log("Dashboard client component");
  const [name, setName] = useState("sandesh");
  return (
    <div>
      <h1>Dashbboaed page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}!</p>
    </div>
  );
}
