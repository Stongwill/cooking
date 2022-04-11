import React from "react";
import FoodItem from "./FoodItem";
import './food.scss';

export default function FoodList({ food = []}) {
  return (
    <div className="foodlist">
      {food.map((item) => (
        <FoodItem key={food.idMeal} {...item} />
      ))}
    </div>
  );
}
