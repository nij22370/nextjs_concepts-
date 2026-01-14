import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ProductResponse = await fetch("http://localhost:3001/products");
  const products = await ProductResponse.json();
  console.log(products);
  return <>{children}</>;
}
