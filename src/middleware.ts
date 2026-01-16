// import { NextResponse, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export function middleware(request: NextRequest) {
//   //return NextResponse.redirect(new URL("/", request.url));//using custoume matcher config

//   //using conditional statement
//   if (request.nextUrl.pathname == "/profile") {
//     return NextResponse.redirect(new URL("/time", request.url));
//   }

//   //conept of cookies and header in middleware
//   const response = NextResponse.next();
//   const themePrefences = request.cookies.get("theme");
//   if (!themePrefences) {
//     response.cookies.set("theme", "dark");
//   }
//   response.headers.set("custome-header", "custome-value");
//   return response;
// }
// // export const config = {
// //   matcher: "/profile",
// // }; //custom matcher config

// //here we can  use  rewrite the main differenc between them is sthat redirect canges the urls laso and redirect but in case of rewrite the url remain s the sam ebut the user is redirected to the that that user want to redirect
// ///clerk setup
const isProtectedRoute = createRouteMatcher(["/mock-users"]);
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect(); // ✅ must call it
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
