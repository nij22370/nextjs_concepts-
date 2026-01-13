import React from "react";
import "server-only";
const serverSideFunction = () => {
  console.log(
    `use multiple libraries,use environment variables,intract with a dtabase ,process confidential information`
  );
  return "sever result  ";
};

export default serverSideFunction;
