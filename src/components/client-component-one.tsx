"use client";
import { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("batman");

  return (
    <>
      <h1>ClientComponentOne</h1>
      {/* <ClientComponentTwo /> */}
      {children}
    </>
  );
};
