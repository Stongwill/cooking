import React from "react";
import CategoryList from "../../components/Categories/CategoryList";
import Preloader from "../../components/Preloader/Preloader";
import Search from "./../../components/Search/Search";
export default function Home({ category = [], value }) {
  return (
    <main className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="title">Categories</h1>
          <Search value={value} />
        </div>
        {!category.length ? (
          <Preloader />
        ) : (
          <CategoryList category={category} />
        )}
      </div>
    </main>
  );
}
