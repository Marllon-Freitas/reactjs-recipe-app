import React from "react";
import { motion } from "framer-motion";

// components
import PopularRecipes from "../components/PopularRecipes/PopularRecipes";
import VegetarianRecipes from "../components/VegetarianRecipes/VegetarianRecipes";

function Home() {
  return (
    <>
      <PopularRecipes />
      <VegetarianRecipes />
    </>
  );
}

export default Home;
