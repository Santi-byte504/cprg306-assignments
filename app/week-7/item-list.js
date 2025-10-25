"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  const sorted = [...items].sort((n, c) => {
    if (sortBy === "name") {
      return n.name.localeCompare(c.name);
    }
    const bycategory = n.category.localeCompare(c.category);
    return bycategory !== 0 ? bycategory : n.name.localeCompare(c.name);
  });
  
  const Button = "rounded text-sm px-3 py-1 ";
  const Clicked = "bg-gray-700 text-white";
  const OffClick = "bg-gray-900 text-gray-500 hover:bg-gray-300 hover:text-black";

  return (
    <section className="space-y-3">
      <div className=" items-center flex gap-2">
        <span className="text-sm text-gray-500">Sort by:</span>
        <button
          className={`${Button} ${sortBy === "name" ? Clicked : OffClick}`}
          onClick={() => setSortBy("name")}>Name</button>
        <button
          className={`${Button} ${sortBy === "category" ? Clicked : OffClick}`}
          onClick={() => setSortBy("category")}>Category</button>
      </div>
      <ul className="space-y-3">
        {sorted.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>))}
      </ul>
    </section>
  );
}
