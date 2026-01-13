"use client";

import { useEffect, useState } from "react";
import PostList from "./postlist";
import { fetchPosts } from "@/lib/api";
import { PaginationWithLinks } from "./ui/pagination-with-link";
import { useSearchParams } from "next/navigation";
import { post } from "@/lib/type";

export default function Post() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;
  const postPerPage = Number(searchParams?.get("pageSize")) || 5;

  const [posts, setPosts] = useState<post[]>([]);
  const [totalPost, setTotalPost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch posts from API
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        // If there is a search term, fetch all posts
        const { posts, totalPost } = searchTerm
          ? await fetchPosts(0, 100) // fetch all 100 posts
          : await fetchPosts(currentPage, postPerPage); // normal paginated fetch

        if (!isMounted) return;

        setPosts(posts);
        setTotalPost(totalPost);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [currentPage, postPerPage, searchTerm]); // refetch when searchTerm changes

  // Filter posts by search term (case-insensitive)
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Post List */}
      {loading ? <p>Loading...</p> : <PostList posts={filteredPosts} />}

      {/* Pagination */}
      {!searchTerm && ( // hide pagination when searching
        <div className="my-8">
          <PaginationWithLinks
            page={currentPage}
            pageSize={postPerPage}
            totalCount={totalPost}
            pageSizeSelectOptions={{
              pageSizeOptions: [5, 10, 25, 50],
            }}
            navigationMode="link"
          />
        </div>
      )}
    </div>
  );
}
{
  /**Absolutely! Let’s carefully go through how the search works in your current setup where you want all posts to appear as soon as you type, while keeping your existing API (fetchPosts) unchanged. I’ll break it down step by step.

1️⃣ Initial Data Fetch
const { posts, totalPost } = await fetchPosts(currentPage, postPerPage);


When the component mounts or the page changes, your useEffect fetches posts using pagination.

currentPage and postPerPage control which posts are fetched.

If searchTerm is empty, only the posts for that page are fetched (e.g., 5 posts if postPerPage = 5).

These posts are stored in the posts state:

setPosts(posts);
setTotalPost(totalPost);

2️⃣ Detecting Search Term

You have an input box bound to searchTerm:

<input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


Every time the user types, searchTerm updates.

Because searchTerm is in the dependency array of useEffect, the component refetches posts whenever it changes.

3️⃣ Conditional Fetch for Global Search

Here’s the key part:

const { posts, totalPost } = searchTerm
  ? await fetchPosts(0, 100) // fetch all posts when typing
  : await fetchPosts(currentPage, postPerPage); // normal paginated fetch


If searchTerm is not empty:

Fetch all posts (0–100) so we can search globally.

If searchTerm is empty:

Fetch only the current page for normal pagination.

✅ This ensures that typing triggers a global search without changing your API.

4️⃣ Filtering the Posts

After fetching, you filter the posts locally:

const filteredPosts = posts.filter(post =>
  post.title.toLowerCase().includes(searchTerm.toLowerCase())
);


.filter() loops over each post in posts.

.toLowerCase() ensures the search is case-insensitive.

Only posts whose title contains the search term are included in filteredPosts.

Example:

Post Title	searchTerm = "qui"	Included?
"qui est esse"	"qui"	✅ Yes
"sunt aut facere"	"qui"	❌ No
"ea molestias quasi"	"qui"	✅ Yes
5️⃣ Displaying Posts

Filtered posts are passed to your PostList component:

<PostList posts={filteredPosts} />


PostList simply renders cards for each post in the array.

No search or pagination logic happens inside PostList — it’s purely presentational.

6️⃣ Pagination Behavior During Search

When searchTerm is empty → normal pagination is visible:

<PaginationWithLinks page={currentPage} pageSize={postPerPage} totalCount={totalPost} />


When searchTerm is not empty → pagination is hidden because all posts are shown.

This is optional — you can also paginate filtered posts if needed. */
}
