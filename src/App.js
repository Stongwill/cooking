import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SubCategory from "./pages/CategoryDishes/SubCategory";
import Recepis from "./pages/Recipes/Recepis";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [category, setCategory] = useState([]);
  const [filterCat, setFilterCat] = useState([]);

  useEffect(() => {
    async function getAllCategories() {
      const resCategories = await axios(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategory(resCategories.data.categories);
      setFilterCat(resCategories.data.categories);
    }
    getAllCategories();
  }, []);

  const handleSearchCat = (str) => {
    setFilterCat(
      category.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home category={filterCat} value={handleSearchCat} />}
        />
        <Route path="/category/:nameCategory" element={<SubCategory />} />
        <Route path="/food/:id" element={<Recepis />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
