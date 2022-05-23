import React from "react";
import { NavLink } from "react-router-dom";

//icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Wrapper, IconsList } from "./styles";

function CategoryFilter() {
  return (
    <Wrapper>
      <IconsList>
        <NavLink to={'/cuisine/italian'}>
          <li className="category-filter">
            <FaPizzaSlice />
            <h4>Italian Food</h4>
          </li>
        </NavLink>
        <NavLink to={'/cuisine/american'}>
          <li className="category-filter">
            <FaHamburger />
            <h4>American</h4>
          </li>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
          <li className="category-filter">
            <GiNoodles />
            <h4>Thai</h4>
          </li>
        </NavLink>
        <NavLink to={'/cuisine/japan'}>
          <li className="category-filter">
            <GiChopsticks />
            <h4>Japanese</h4>
          </li>
        </NavLink>
      </IconsList>
    </Wrapper>
  );
}

export default CategoryFilter;
