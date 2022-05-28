import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

//icons
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiTacos, GiCroissant } from "react-icons/gi";
import { Wrapper, IconsList, StyleLink } from "./styles";

// carrousel imports
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function CategoryFilter() {
  const [windowSize, setWindowSize] = useState(0);

  window.addEventListener("resize", function () {
    setWindowSize(window.innerWidth);
  });

  return (
    <Wrapper>
      <Splide
        options={{
          perPage: `${windowSize > 650 ? 6 : windowSize < 250 ? 2 : 4}`,
          gap: "1.5rem",
          focus: "center",
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide>
          <StyleLink to={"/cuisine/Italian"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <FaPizzaSlice />
              <h4>Italian Food</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>

        <SplideSlide>
          <StyleLink to={"/cuisine/American"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <FaHamburger />
              <h4>American</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>

        <SplideSlide>
          <StyleLink to={"/cuisine/French"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <GiCroissant />
              <h4>French</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>

        <SplideSlide>
          <StyleLink to={"/cuisine/Mexican"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <GiTacos />
              <h4>Mexican</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>

        <SplideSlide>
          <StyleLink to={"/cuisine/Japanese"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <GiChopsticks />
              <h4>Japanese</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>

        <SplideSlide>
          <StyleLink to={"/cuisine/Thai"}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ textAlign: "center" }}
            >
              <GiNoodles />
              <h4>Thai</h4>
            </motion.div>
          </StyleLink>
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
}

export default CategoryFilter;
