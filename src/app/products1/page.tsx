// export const fetchCache = "default-cache";
// import { cookies } from "next/headers";
export const dynamic = "force-static";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};
export default async function ProductPage() {
  // const detailsResponse = await fetch("http://localhost:3001/products/1");
  // const details = await detailsResponse.json();
  // const cookieStore = await cookies(); // ✅ await here
  // const theme = cookieStore.get("theme"); // optional chainin
  const response = await fetch("http://localhost:3001/products", {
    // cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  const products = await response.json();
  return (
    <ul className="space-y-4 p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-grey-700"
        >
          <h2 className="font-semibold text-xl">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          {/* <p>{details.price}</p> */}
        </li>
      ))}
    </ul>
  );
}
