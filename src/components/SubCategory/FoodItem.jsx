import React from "react";
import { Link } from "react-router-dom";

export default function FoodItem({ strMeal, idMeal, strMealThumb }) {
  return (
    <div className="fooditem">
      <Link to={`/food/${idMeal}`}>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="fooditem__img"
          width={190}
        />
        <h5 className="fooditem__title">{strMeal}</h5>
      </Link>
    </div>
  );
}
