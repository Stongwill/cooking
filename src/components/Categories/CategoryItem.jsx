import React from "react";
import { Link } from "react-router-dom";

export default function CategoryItem({
  strCategoryThumb,
  strCategory,
  strCategoryDescription,
}) {
  return (
    <div className="category__item">
      <Link to={`/category/${strCategory}`} className="category__title">
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="category__img"
          width={200}
        />
        {strCategory}
      </Link>
      <p className="category__desription">
        {strCategoryDescription.slice(0, 70)} ...
      </p>
    </div>
  );
}
