"use client";
import React, { useState, useEffect } from "react";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};
const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error("Network response was not  ok  problem");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown  error occured ");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) {
    return <p>loading....</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }
  return (
    <ul className="space-y p-4">
      {products.map((product: Product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
};
export default ProductPage;
{
  /**This program is a client-side React component that:

Fetches product data from an API

Manages loading and error states

Displays a list of products once data is received

Handles failures safely without crashing the UI

🧱 Main Parts of the Program
1️⃣ Client Component Declaration
"use client";


Tells Next.js that this component runs in the browser

Required because hooks like useState and useEffect are used

2️⃣ Product Type Definition
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};


Defines the structure of product data

Ensures type safety and prevents invalid data usage

3️⃣ State Management Using useState
const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

State	Role
products	Stores fetched product list
loading	Tracks API request status
error	Stores error message
4️⃣ Data Fetching with useEffect
useEffect(() => {
  const fetchProducts = async () => {
    ...
  };
  fetchProducts();
}, []);


Runs once when component loads

Calls backend API using fetch

Uses async/await for clean asynchronous handling

5️⃣ API Call and Error Handling

Sends request to:

http://localhost:3001/products


Checks response validity

Converts response to JSON

Handles:

Network errors

Server errors

Updates state accordingly

6️⃣ Conditional Rendering
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;


Shows loading message while fetching

Shows error message if request fails

Prevents broken UI

7️⃣ Rendering Product List
<ul>
  {products.map((product) => (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </li>
  ))}
</ul>


Iterates over fetched products

Displays title, description, and price

Uses unique key for efficient rendering

🔄 Complete Working Flow
Component loads
→ loading = true
→ useEffect runs
→ API request sent
→ response received
→ success → products stored
→ failure → error stored
→ loading = false
→ UI updates accordingly

⭐ Final One-Line Summary

This program fetches product data on the client side, manages loading and error states using React hooks, and displays the product list safely and efficiently. */
}
