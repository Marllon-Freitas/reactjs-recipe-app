import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-text-color: rgb(59,59,59);
  }

  h4 {
    font-size: 1rem;
    color: var(--gray-text-color);
  }
  h3 {
    font-size: 1.3rem;
    color: var(--gray-text-color);
    line-height: 2rem;
    margin: 2rem 0;
  }

  a {
    text-decoration: none;
    color: var(--gray-text-color);
  }
`;
