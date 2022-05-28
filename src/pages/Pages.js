import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine/Cuisine";
import SearchResults from "./SearchedResults";
import Recipes from "./Recipes/Recipes";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:search" element={<SearchResults />} />
      <Route path="/search/" element={<Home />} />
      <Route path="/recipe/:name" element={<Recipes />} />
    </Routes>
  );
}

export default Pages;
