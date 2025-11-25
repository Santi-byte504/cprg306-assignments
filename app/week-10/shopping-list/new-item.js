"use client";
import {useState} from "react";
export default function NewItem({onAddItem}){
  const [Quantity, SetQuantity] = useState(1);
  const [name, SetName] = useState("");
  const [category, SetCategory] = useState("produce");
  const increment = () => {
        SetQuantity((Quantity) => Math.min(20, Quantity + 1));
    }
    const decrement = () => {
        SetQuantity((Quantity) => Math.max(1, Quantity - 1));
    }
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const Name = {name: name.trim(), quantity: Quantity, category, id: Math.random().toString(36).slice(2, 9)};
    
    onAddItem(Name);   
    SetName("");
    SetQuantity(1);
    SetCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded p-4 bg-gray-900 space-y-6"
    >
      <div>
        <label htmlFor="item" className="text-sm font-bold">Enter Item</label>
        <input
        id="item"
        value={name}
        type="Text"
        onChange={(nam) => SetName(nam.target.value)}
        className="rounded border w-full px-3 py-2"
        required
        />
      </div>

      <div>
        <span className="font-bold text-sm mb-1 ">Quantity: (1-20)</span>
        <p className="mb-3">
        <span className="font-bold text-sm">Current:{" "}</span>
        <span className="text-xl font-semibold">{Quantity}</span>
        </p>

        <div className="flex items-center gap-3">
        <button type="button" onClick={decrement} disabled={Quantity === 1} className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-300 hover:text-black disabled:bg-red-300 disabled:text-red-700">-</button>
        <button type="button" onClick={increment} disabled={Quantity === 20} className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-300 hover:text-black disabled:bg-red-300 disabled:text-red-700">+</button>
        </div>
      </div>
      
      <div>
        <label htmlFor="category" className="text-sm font-bold mb-1">Category</label>
        <select
          id="category"
          value={category}
          onChange={(nam) => SetCategory(nam.target.value)} className="rounded border w-full px-3 py-2 bg-gray-900">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>
<button type="submit" className="rounded bg-gray-800 hover:bg-gray-300 hover:text-black px-4 py-2">Add Item</button>
    </form>
  );
}
