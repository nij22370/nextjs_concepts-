import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("THEME")?.value;

  console.log("Theme:", theme);
  console.log("about server component");

  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}
