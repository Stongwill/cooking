import React from "react";
import Preloader from "../../components/Preloader/Preloader";
import FoodList from "../../components/SubCategory/FoodList";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SubCategory() {
  const [food, setFood] = useState([]);
  const { nameCategory } = useParams();
  const goBack = useNavigate();

  useEffect(() => {
    async function getFiltredByCatigories(name) {
      try {
        const resFiltred = await axios(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
        );
        setFood(resFiltred.data.meals);
      } catch (e) {
        console.error(e);
      }
    }
    getFiltredByCatigories(nameCategory);
  }, [nameCategory]);
  return (
    <div className="subcategory">
      <div className="container">
        <button className="goback__btn" onClick={() => goBack(-1)}>
          Go back
        </button>
        {!food.length ? <Preloader /> : <FoodList food={food} />}
      </div>
    </div>
  );
}
