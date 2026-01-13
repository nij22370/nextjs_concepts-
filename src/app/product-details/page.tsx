import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";
export default function ProductDetailsPage() {
  return (
    <div>
      <h1>product details page </h1>
      <Suspense fallback={<p>loading product details ....</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>loading Reviews ....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
