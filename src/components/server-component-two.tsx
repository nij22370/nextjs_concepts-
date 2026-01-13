import fs from "fs";
const ServerComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");
  return <div> ServerComponentTwo</div>;
};

export default ServerComponentTwo;
