import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CuisineCard, Wrapper } from "./Cuisine/styles";

function SearchedResults() {
  const [searchedResults, setSearchedResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    getSearchedRecipes(params.search);
    console.log(searchedResults.length);
  }, [params.search, searchedResults.length]);

  async function getSearchedRecipes(searchName) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchName}?&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    if (data.code) {
      setSearchedResults([]);
    } else {
      setSearchedResults(data.results);
    }
  }

  return (
    <>
      {searchedResults.length < 1 ? (
        <h1>No results found for "{params.search}"</h1>
      ) : (
        <Wrapper>
          {searchedResults.map((searchedResults) => {
            return (
              <CuisineCard key={searchedResults.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={searchedResults.id}
                  className="cuisine-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={searchedResults.image}
                    alt={searchedResults.title}
                    title={searchedResults.title}
                  />
                  <h4>{searchedResults.title}</h4>
                </motion.div>
              </CuisineCard>
            );
          })}
        </Wrapper>
      )}
    </>
  );
}

export default SearchedResults;
