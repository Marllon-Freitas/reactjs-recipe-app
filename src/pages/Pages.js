import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import Home from "./Home";
import Cuisine from "./Cuisine/Cuisine";
import SearchResults from "./SearchedResults";
import Recipe from "./Recipe/Recipe";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/search/:search" element={<SearchResults />} />
        <Route path="/search/" element={<Home />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
