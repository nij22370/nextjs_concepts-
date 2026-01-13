import serverSideFunction from "@/utils/server-utils";
import ImageSlider from "../client-routes/page";
// import clientSideFunction from "@/utils/client-utils";

export default function ServerRoutePage() {
  console.log("server route rendered ");
  const result = serverSideFunction();
  // const clientresult = clientSideFunction(); to shoe the erro that client side could be use in specific client side to use the browser specific feature otherwise the erroe will occure
  return (
    <>
      <h1>sServer Route Page </h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
//here we can use the server only code easily
