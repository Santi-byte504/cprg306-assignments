"use client";
import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredients){
    const ingred = (ingredients ?? "").trim();
    if(!ingred) return [];
    const url = new URL ("https://www.themealdb.com/api/json/v1/1/filter.php");
    url.search = new URLSearchParams({ i: ingred}).toString();

    try {
        const response = await fetch(url.toString());
        if(!response.ok) throw new Error ("Http error");
        const { meals } = await response.json();
        return meals ?? [];
    }   catch (error) {
        console.error(error);
        return [];
    }
}

export default function MealIdeas({ ingredients }) {
    const [mealIdea, setMealIdeas] = useState([]);
    async function loadMealIdeas(){
        const ideas = await fetchMealIdeas(ingredients);
        setMealIdeas(ideas);
    }
    useEffect(() => { loadMealIdeas(); }, [ingredients]);

return (
    <div>
      <h3 className="text-lg mb-1 font-bold"> Meal ideas {ingredients ? `for “${ingredients}”` : "(select an item)"}</h3>

      {!ingredients && (<p className="text-sm text-gray-600">Select an item to see food ideas!</p>)}

      {ingredients && mealIdea.length === 0 && (<p className="text-sm text-gray-600">No meals available.</p>)}

      <ul className="grid gap-3 sm:grid-cols-2">
        {mealIdea.map((me) => (
          <li key={me.idMeal} className="bg-gray-900 rounded p-2">
            <p className="font-medium">{me.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}


