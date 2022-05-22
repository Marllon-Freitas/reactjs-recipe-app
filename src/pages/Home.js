import React from "react";

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
