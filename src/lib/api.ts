import { post } from "./type";

export async function fetchPosts(page: number, perPage: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: post[] = await res.json();
  const totalPost = parseInt(res.headers.get("X-Total-count") || "0");

  return { posts, totalPost };
}
