"use client";
import { useState } from "react";

export const ClientComponentTwo = () => {
  const [name, useName] = useState("batman");
  return <div>ClientComponentTwo</div>;
};
