"use client";
import { useState } from "react";
const NavSearch = () => {
  const [search, useSearch] = useState();

  console.log("NavSearch rendered");
  return <div>Nav Search Input </div>;
};

export default NavSearch;
//we use here because it doesn have any clindern below
{/**                LANDING PAGE (SC)
                       |
            -------------------------
            |                       |
        NAV BAR (SC)             MAIN (SC)
            |
      -----------------
      |               |
  NAV LINKS (SC)   NAV SEARCH (SC)
 */}