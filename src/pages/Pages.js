import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine/Cuisine";
import SearchResults from "./SearchResults";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/search/:type" element={<SearchResults />} />
    </Routes>
  );
}

export default Pages;
