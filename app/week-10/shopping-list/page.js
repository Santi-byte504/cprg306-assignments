"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../../week-10/context/AuthContext";

export default function Page() {
const [items, otherItems] = useState([]);
const [selectedItem, setSelectedItem] = useState("");
const { user } = useUserAuth();
  
useEffect(() => {
  if (!user) return;

  async function loadItems() {
    const loadedItems = await getItems(user.uid);
    otherItems(loadedItems);
  }

  loadItems();
}, [user]);

async function handleAddItem(newItem) {
  if (!user) return;
  const id = await addItem(user.uid, newItem);
  const itemId = { id, ...newItem };
  otherItems((currentItems) => [...currentItems, itemId]);
}

function clearName(name){
  let base = name.split(",")[0];
  const emoji = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])+/g;
  base = base.replace(emoji, "");
  return base.trim().toLowerCase();
}

function handleItemSelect(item){
  const ingredients = clearName(item.name);
  setSelectedItem(ingredients);
}


  return (
    <main className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping List + Meal Ideas</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredients={selectedItem} />
        </div>
      </div>
    </main>
  );
}
