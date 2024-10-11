import { useState } from "react";
import { ingredients, steps } from "./content/cards.json";
console.log(ingredients, steps);

const units = {
  c: "cup",
  tbsp: "tablespoon",
  tsp: "teaspoon",
};

const fraction = (amount) => {
  const amtString = amount.toString();
  if (!amtString.includes(".")) return amount;
  const dec = amtString.split(".");
  const decimalPlaces = Math.pow(10, dec[1].length - 1);

  return ` ${dec[0]}.${dec[1]}`;
};

function App() {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="flex gap-10">
        <div className="flex-1">
          <h2>Ingredients:</h2>
          <ul className="sticky top-0">
            {ingredients.map((ingredient) => (
              <li className="my-3">
                <span className="text-sm">{ingredient.amount}</span>
                {fraction(ingredient.amount)}
                {units[ingredient.unit]} {ingredient.ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2>Steps:</h2>
          <ol>
            {steps.map((step) => (
              <li className="my-3">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
