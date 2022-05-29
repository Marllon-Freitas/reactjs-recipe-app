import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
  gap: 2rem;
  width: 100%;
  padding: 1rem;
`;

export const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 1.25rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    cursor: pointer;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
  @media (max-width: 400px) {
    img {
      width: 95%;
    }
  }
`;
