import React, { useState } from "react";
import { Wrapper, FormStyle } from "./styles";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function onSubmitHandler(e) {
    e.preventDefault();
    navigate(`/search/${searchInput}`);
  }

  return (
    <Wrapper>
      <FormStyle onSubmit={onSubmitHandler}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search for a recipe..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </FormStyle>
    </Wrapper>
  );
}

export default SearchInput;
