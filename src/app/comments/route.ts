// app/api/comments/route.ts
import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((c) => c.text.includes(query))
    : comments;
  return Response.json(filterComments);
}
{
  /*1️⃣ export async function GET(request: NextRequest) { ... }

This is a Next.js App Router route handler for GET requests.

request: NextRequest is the incoming request object.

NextRequest is a special wrapper by Next.js that adds extra features on top of the normal Web Request.

async means you can use await inside (for example, fetching data from a database).

2️⃣ const searchParams = request.nextUrl.searchParams;

request.nextUrl gives the full URL of the incoming request.

.searchParams is a URLSearchParams object that allows you to read query parameters from the URL.

Example:
If the request URL is /api/comments?query=hello, then searchParams lets you get query=hello.

3️⃣ const query = searchParams.get("query");

.get("query") retrieves the value of the query parameter from the URL.

So if the URL is /api/comments?query=hello, then query will be "hello".

If there is no query parameter, query will be null.

4️⃣ Filtering the comments
const filterComments = query
  ? comments.filter((c) => c.text.includes(query))
  : comments;


This is a conditional (ternary) operator:

If query exists (not null):

comments.filter(...) goes through each comment and keeps only the ones whose text includes the query string.

If query does not exist:

Return all comments without filtering.

c.text.includes(query) checks if the comment’s text contains the search query.

Example:

const comments = [
  { text: "Hello world" },
  { text: "Goodbye" },
];

query = "Hello";

comments.filter(c => c.text.includes(query)) 
// Returns: [{ text: "Hello world" }]

5️⃣ Returning the response
return Response.json(filterComments);


This sends the filtered comments back to the client as JSON.

Problem here: Response.json is wrong in Next.js App Router; it should be NextResponse.json:

import { NextResponse } from "next/server";

return NextResponse.json(filterComments);


NextResponse.json() automatically sets:

Content-Type: application/json

Status code 200 OK

Converts your JavaScript object/array to JSON format. */
}

// GET all comments
// export async function GET() {
//   return NextResponse.json(comments);
// }

// POST a new comment
export async function POST(request: Request) {
  const data = await request.json();

  // Create new comment
  const newComment = {
    id: comments.length + 1,
    text: data.text, // fixed this line
  };

  // Add to comments array
  comments.push(newComment);

  return new NextResponse(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
