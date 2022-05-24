import React from "react";
import { motion } from "framer-motion";

//icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiTacos, GiCroissant } from "react-icons/gi";
import { Wrapper, IconsList, StyleLink } from "./styles";

function CategoryFilter() {
  return (
    <Wrapper>
      <IconsList>
        <StyleLink to={'/cuisine/Italian'}>
          <li className="category-filter">
            <FaPizzaSlice />
            <h4>Italian Food</h4>
          </li>
        </StyleLink>
        <StyleLink to={'/cuisine/American'}>
          <li className="category-filter">
            <FaHamburger />
            <h4>American</h4>
          </li>
        </StyleLink>
        <StyleLink to={'/cuisine/French'}>
          <li className="category-filter">
            <GiCroissant />
            <h4>French</h4>
          </li>
        </StyleLink>
        <StyleLink to={'/cuisine/Mexican'}>
          <li className="category-filter">
            <GiTacos />
            <h4>Mexican</h4>
          </li>
        </StyleLink>
        <StyleLink to={'/cuisine/Japanese'}>
          <li className="category-filter">
            <GiChopsticks />
            <h4>Japanese</h4>
          </li>
        </StyleLink>
        <StyleLink to={'/cuisine/Thai'}>
          <li className="category-filter">
            <GiNoodles />
            <h4>Thai</h4>
          </li>
        </StyleLink>
      </IconsList>
    </Wrapper>
  );
}

export default CategoryFilter;
