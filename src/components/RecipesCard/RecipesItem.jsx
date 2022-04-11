import React from "react";
import "./recipes.scss";
export default function RecipesItem({
  goBack,
  recipes,
  idMeal,
  strMealThumb,
  strMeal,
  strInstructions,
  strArea,
  strCategory,
  strYoutube,
}) {
  return (
    <div className="recepesitem">
      <div className="recepesitem__inner">
        <div className="recepesitem__img">
          <img src={strMealThumb} alt={strMeal} width={400} />
        </div>
        <div className="recepesitem__txt">
          <h1> {strMeal}</h1>
          <div className="recipesitem__inner">
            <h6>
              <span>Category:</span>
              <button onClick={() => goBack(-1)}>{strCategory}</button>
            </h6>

            {strArea ? (
              <h6 className="recipesitem__country">
                <span>Country:</span> {strArea}
              </h6>
            ) : null}
          </div>
          <p className="recepesitem__desc"> {strInstructions}.</p>
        </div>
      </div>

      <div className="recipes__instuction">
        <div className="recipes__inner">
          <div className="recepesitem__ingredients">
            <div className="str__inner">
              <div className="str__ingredient">
                <h3>Ingredient</h3>
              </div>
              <div className="str__measure">
                <h3>Measure</h3>
              </div>
            </div>
            {Object.keys(recipes).map((key) => {
              if (key.includes("Ingredient") && recipes[key]) {
                //recipes[key] - условие, чтобы объект приходил не пустой
                return (
                  <>
                    <div className="str__inner">
                      <div className="str__ingredient">
                        <p>{recipes[key]}</p>
                      </div>
                      <div className="str__measure">
                        <p>{recipes[`strMeasure${key.slice(13)}`]}</p>
                      </div>
                    </div>
                  </>
                );
              }
              return null;
            })}
          </div>

          {strYoutube ? (
            <div className="video">
              <h1>Video Recipe</h1>
              <iframe
                title={idMeal}
                src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
