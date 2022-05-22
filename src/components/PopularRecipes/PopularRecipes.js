import React, { useEffect, useState } from "react";
import { Card, Wrapper } from "./styles";

function PopularRecipes() {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  async function getPopularRecipes() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data.recipes);
    setPopularRecipes(data.recipes);
    return data;
  }

  return (
    <Wrapper>
      {popularRecipes.map((recipe, index) => {
        return (
          <Card key={index}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
          </Card>
        );
      })}
    </Wrapper>
  );
}

export default PopularRecipes;
