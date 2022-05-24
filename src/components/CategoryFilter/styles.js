import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const IconsList = styled.ul`
  list-style: none;
  display: flex;
`;

export const StyleLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 50%;
  transform: scale(0.7);
  height: 6rem;
  width: 6rem;
  margin-right: 0.5rem;
  cursor: pointer;
  background: linear-gradient(35deg, #494949 0%, #313131 100%);

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h4 {
      font-size: 0.75rem;
      font-weight: bold;
      color: #fff;
    }
    svg {
      font-size: 1.5rem;
      color: #fff;
    }
  }

  &.active {
    transform: scale(0.8);
    background: linear-gradient(to right, #f27121 0%, #e94027 100%);

    svg {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }
`;
