"use client";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "all";
  const sort = searchParams.get("sort") || "default";
  const page = Number(searchParams.get("page")) || 1;

  return (
    <div>
      Showing {category} products, sorted by {sort}, page {page}.
    </div>
  );
}
// {
//   /**Summary in simple words

// JSX Server Component → searchParams in props = ❌ empty

// Client Component + useSearchParams → ✅ works correctly

// So the exact reason is:

// In a .jsx Client Component, useSearchParams() is required to dynamically read URL query parameters, because Server Component props (searchParams) in JavaScript files do not receive them. */
// }
