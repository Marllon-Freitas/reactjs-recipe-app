import React, { useEffect, useState } from "react";
import { Card, Gradient, Wrapper } from "./styles";

// carrousel imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  async function getPopularRecipes() {
    const checkPopularRecipes = localStorage.getItem("popularRecipes");

    if (checkPopularRecipes) {
      setPopularRecipes(JSON.parse(checkPopularRecipes));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=15&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      localStorage.setItem("popularRecipes", JSON.stringify(data.recipes));
      console.log(data.recipes);
      setPopularRecipes(data.recipes);
    }
  }

  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <Splide
        options={{
          perPage: 3,
          gap: "2.5rem",
          focus: "center",
          pagination: false,
        }}
      >
        {popularRecipes.map((recipe, index) => {
          return (
            <SplideSlide key={index} title={recipe.title}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default PopularRecipes;
