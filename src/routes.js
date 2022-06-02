import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookmarks from "./pages/bookmarks";
import Browser from "./pages/browser";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import SingleRecipe from "./pages/single-recipe";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe" element={<SingleRecipe />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
    </Routes>
  );
}

export default RoutesComponent;
