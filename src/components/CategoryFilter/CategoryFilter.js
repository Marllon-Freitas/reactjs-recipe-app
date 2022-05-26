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
          perPage: `${windowSize > 650 ? 6 : 4}`,
          gap: "1.5rem",
          focus: "center",
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/Italian"}>
              <FaPizzaSlice />
              <h4>Italian Food</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>

        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/American"}>
              <FaHamburger />
              <h4>American</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>

        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/French"}>
              <GiCroissant />
              <h4>French</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>

        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/Mexican"}>
              <GiTacos />
              <h4>Mexican</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>

        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/Japanese"}>
              <GiChopsticks />
              <h4>Japanese</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>

        <SplideSlide>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <StyleLink to={"/cuisine/Thai"}>
              <GiNoodles />
              <h4>Thai</h4>
            </StyleLink>
          </motion.div>
        </SplideSlide>
      </Splide>
    </Wrapper>
  );
}

export default CategoryFilter;
