"use client";
import { useState } from "react";
const NavSearch = () => {
  const [search, useSearch] = useState();

  console.log("NavSearch rendered");
  return <div>Nav Search Input </div>;
};

export default NavSearch;
