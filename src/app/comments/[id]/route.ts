import { comments } from "../data";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ await first
  const numericId = parseInt(id);

  // Redirect if ID is invalid
  if (numericId < 1 || numericId > comments.length) {
    return redirect("/comments");
  }

  const comment = comments.find((c) => c.id === numericId);

  return NextResponse.json(comment); // ✅ use NextResponse
}

///when the declared variable is not used is we can prefixd it
{
  /**Imports the comments array from your data file.

export async function GET(


Defines a GET API route.

async is needed because we use await.

  request: Request,


Represents the incoming HTTP request.

(Not used here, but required by the function signature.)

  { params }: { params: Promise<{ id: string }> }


Destructures params from the route context.

params is a Promise that will resolve to:

{ id: "1" }

) {
  const { id } = await params;


await params resolves the Promise.

Extracts id from it.
parseInt(id) converts the string "1" to the number 1.

Example:
Request: GET /comments/2

params resolves to { id: "2" }

numericId becomes 2.

Step 2: Validate the ID
if (numericId < 1 || numericId > comments.length) {
  return redirect("/comments");
}


Checks if the requested ID is out of range:

< 1 → negative or zero IDs don’t exist.

> comments.length → no comment with that ID exists.

If invalid, redirect the user to /comments.

Example:

If you request /comments/1000 and you have only 5 comments → redirect happens.

Now id is a string (example: "1").

  const comment = comments.find(
    (c) => c.id === parseInt(id)
  );


Loops through the comments array.

Converts id from string → number.

Finds the comment whose id matches.

  return Response.json(comment ?? null);


Sends the found comment as JSON.

If nothing is found, returns null instead of undefined
(to avoid JSON serialization errors).

🔁 What happens when you visit /comments/1

params → { id: "1" }

"1" → 1

comments.find(...) → matching comment

Returned as JSON Response
    
    
    
    Here is a clear, simple explanation of this line 👇

const comment = comments.find((c) => c.id === parseInt(id));

🔹 comments

An array of comment objects
Example:

[
  { id: 1, text: "Hi" },
  { id: 2, text: "Hello" }
]

🔹 .find(...)

JavaScript array method

Goes one by one through the array

Returns:

the first matching element, or

undefined if no match

🔹 (c) => ...

Arrow function (callback)

c = current comment object during iteration

🔹 c.id

The id of the current comment (number)

🔹 parseInt(id)

Converts id from string → number

Example:

"1" → 1

🔹 ===

Strict equality

Same value and same type

🔹 Full logic in plain English

“Go through the comments array and return the comment whose id (number) is equal to the URL id converted to a number.” */
}
{
  /**The line in context
const { id } = await params;


params is passed automatically by Next.js to your route function.

In your function signature:

{ params }: { params: Promise<{ id: string }> }


Notice: params is a Promise in Next.js (v13+ App Router).

2️⃣ Why we await it

params is not the object itself yet; it’s a Promise that resolves to the object.

We need the actual object to access the id property.

await params; // resolves to { id: "1" } for /comments/1 */
}
///patch

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();

  const index = comments.findIndex((c) => c.id === parseInt(id));

  //   // If comment not found, return 404
  //   if (index === -1) {
  //     return new Response(JSON.stringify({ message: "Comment not found" }), {
  //       status: 404,
  //     });
  //   }

  comments[index].text = text;

  return Response.json(comments[index]);
}
//Converts a JavaScript object → JSON string.
//const obj = { id: 1, text: "Hello" };
//const jsonString = JSON.stringify(obj);
//console.log(jsonString); // '{"id":1,"text":"Hello"}/
{
  /**Two ways to get text

Option 1 — destructure directly from await:

const { text } = await request.json();


Here, we directly extract text from the resolved object.

Cleaner, shorter, no extra variable.

Option 2 — store body first, then destructure:

const body = await request.json();
const { text } = body;


Works exactly the same.

More verbose — sometimes preferred if you need other fields from the body */
}
//delete

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Find index of the comment
  const index = comments.findIndex((c) => c.id === parseInt(id));

  //   if (index === -1) {
  //     // Comment not found
  //     return new Response(JSON.stringify({ error: "Comment not found" }), {
  //       status: 404,
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   }

  // Delete the comment
  const deletedComment = comments.splice(index, 1)[0];

  return Response.json(deletedComment);
}
