"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
export default function Dashboaed() {
  console.log("Dashboard client component");
  const [name, setName] = useState("sandesh");
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  // const { isLoaded, isSignedIn, user } = useUser();
  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }
  if (!isLoaded || !userId) {
    return null;
  }
  return (
    <div>
      <h1>Dashbboaed page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}!</p>
    </div>
  );
}
