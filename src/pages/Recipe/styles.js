import styled from "styled-components";

export const DetailsWrapper = styled.div`
  margin: 10rem 0 5rem 0;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949 0%, #313131 100%);
    color: #fff;
  }
  
  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border:  2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 10rem;
  
`;