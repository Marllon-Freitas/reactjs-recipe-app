import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { link, useParams } from "react-router-dom";
import { CuisineCard, Wrapper } from "./styles";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  const params = useParams();

  async function getSelectedCuisine(cuisineName) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}?&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setCuisine(data.results);
  }
  useEffect(() => {
    getSelectedCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Wrapper>
      {cuisine.map((cuisine) => {
        return (
          <CuisineCard key={cuisine.id}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={cuisine.id}
              className="cuisine-card"
            >
              <img
                src={cuisine.image}
                alt={cuisine.title}
                title={cuisine.title}
              />
              <h4>{cuisine.title}</h4>
            </motion.div>
          </CuisineCard>
        );
      })}
    </Wrapper>
  );
}

export default Cuisine;
