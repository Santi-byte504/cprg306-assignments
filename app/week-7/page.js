"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
const [items, otherItems] = useState(itemsData);
const handleAddItem = (item) => {
  otherItems((Itemscurrent) => [...Itemscurrent, item]);
}

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold mb-3">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items = {items} />
    </main>
  );
}
