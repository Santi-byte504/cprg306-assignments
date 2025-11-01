"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
const [items, otherItems] = useState(itemsData);
const [selectedItem, setSelectedItem] = useState("");
const Newid = () => (Math.random() + 1).toString(36).slice(2, 10);

function handleAddItem(newItem) {
  const itemwithid = newItem.id ? newItem : { id: Newid(), ...newItem };
  otherItems((Itemscurrent) => [...Itemscurrent, itemwithid]);
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
