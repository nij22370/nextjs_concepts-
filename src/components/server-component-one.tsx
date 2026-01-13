import fs from "fs";
const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
      <div> ServerComponentOne</div>
      {/* <ServerComponentTwo /> */}
    </>
  );
};

export default ServerComponentOne;
