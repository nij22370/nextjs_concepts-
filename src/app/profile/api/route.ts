import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme");

  console.log(headerList.get("authorization"));
  console.log(theme);

  const response = new NextResponse("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });

  response.cookies.set("theme", "dark", { path: "/" });
  response.cookies.set("resultpage", "20", { path: "/" });

  return response;
}
