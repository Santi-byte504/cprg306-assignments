"use client";
import {useState} from "react";
export default function NewItem(){
    const [Quantity, SetQuantity] = useState(1);
    const increment = () => {
        SetQuantity((quantity) => Math.min(20, quantity + 1));
    }
    const decrement = () => {
        SetQuantity((quantity) => Math.max(1, quantity - 1));
    }
    return(
            <section className="rounded p-4 bg-gray-900">
      <p className="mb-3">
        <span className="font-bold text-sm">Quantity:{" "}</span>
        <span className="font-bold text-xl">{Quantity}</span>
      </p>
        <div className="flex item-center my-4 gap-3">
            <button onClick={decrement} disabled={Quantity === 1} className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-300 hover:text-black disabled:bg-red-300 disabled:text-red-700">-</button>
            <button onClick={increment} disabled={Quantity === 20} className="rounded px-4 py-2 bg-gray-700 hover:bg-gray-300 hover:text-black disabled:bg-red-300 disabled:text-red-700">+</button>
        </div>
         <p className="mt-2 text-xs">Allowed range: 1–20</p>
        </section>
    )
}
