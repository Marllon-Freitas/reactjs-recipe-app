import React, { useEffect, useState } from "react";
import { Card, Gradient, Wrapper, GridWrapper } from "./styles";
import { Link } from "react-router-dom";

// carrousel imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function VegetarianRecipes() {
  const [vegetarianRecipes, setVegetarianRecipes] = useState([]);
  const [windowSize, setWindowSize] = useState(0);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  useEffect(() => {
    getVegetarianRecipes();
    setWindowSize(window.innerWidth);
  }, []);

  async function getVegetarianRecipes() {
    const checkVegetarianRecipes = localStorage.getItem("vegetarianRecipes");

    if (checkVegetarianRecipes) {
      setVegetarianRecipes(JSON.parse(checkVegetarianRecipes));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=15&tags=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      localStorage.setItem("vegetarianRecipes", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setVegetarianRecipes(data.recipes);
    }
  }

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      <h3>Vegetarian Recipes</h3>
      {windowSize > 650 ? (
        <Splide
          options={{
            perPage: 4,
            gap: "1rem",
            focus: "center",
            pagination: false,
          }}
        >
          {vegetarianRecipes.map((recipe, index) => {
            return (
              <SplideSlide key={index} title={recipe.title}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      ) : (
        <GridWrapper>
          {vegetarianRecipes.map((recipe, index) => {
            return (
              <SplideSlide key={index} title={recipe.title}>
                <Card>
                  <Link to={`/recipe/${recipe.id}`}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </GridWrapper>
      )}
    </Wrapper>
  );
}

export default VegetarianRecipes;
