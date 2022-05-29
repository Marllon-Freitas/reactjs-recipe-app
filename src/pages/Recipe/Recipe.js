import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { DetailsWrapper, Button, Info } from "./styles";

function Recipe() {
  const [individualRecipeDetails, setIndividualRecipeDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  useEffect(() => {
    getIndividualRecipes();
  }, []);

  async function getIndividualRecipes() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    if (data.code) {
      setIndividualRecipeDetails([]);
    } else {
      setIndividualRecipeDetails(data);
    }
  }
  return (
    <DetailsWrapper>
      <div>
        <h2>{individualRecipeDetails.title}</h2>
        <img
          src={individualRecipeDetails.image}
          alt={individualRecipeDetails.title}
        />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <>
            {individualRecipeDetails.length < 1 ? (
              <h3>No instructions available found</h3>
            ) : (
              <div>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: individualRecipeDetails.summary,
                  }}
                >
                  {individualRecipeDetails.summary}
                </h3>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: individualRecipeDetails.instructions,
                  }}
                >
                  {individualRecipeDetails.instructions}
                </h3>
              </div>
            )}
          </>
        )}
        {activeTab === "ingredients" && (
          <>
            {individualRecipeDetails.length < 1 ? (
              <h3>No ingredients found</h3>
            ) : (
              <ul>
                {individualRecipeDetails.extendedIngredients.map(
                  (ingredient) => {
                    return (
                      <li key={ingredient.id}>
                        {ingredient.original} - {ingredient.amount}{" "}
                        {ingredient.unit}
                      </li>
                    );
                  }
                )}
              </ul>
            )}
          </>
        )}
      </Info>
    </DetailsWrapper>
  );
}

export default Recipe;
