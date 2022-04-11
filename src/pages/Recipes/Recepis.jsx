import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Preloader from "../../components/Preloader/Preloader";
import RecipesItem from "./../../components/RecipesCard/RecipesItem";

export default function Recepis() {
  const [recipes, setRecipes] = useState({});
  const { id } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    async function getFoodById(foodId) {
      try {
        const resFoodById = await axios(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
        );
        setRecipes(resFoodById.data.meals[0]);
      } catch (e) {
        console.log(e);
      }
    }
    getFoodById(id);
  }, [id]);

  return (
    <div className="recepis">
      <div className="container">
        {!recipes.idMeal ? (
          <Preloader />
        ) : (
          <RecipesItem {...recipes} recipes={recipes} goBack={goBack} />
        )}
        <button className="goback__btn" onClick={() => goBack(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
}
