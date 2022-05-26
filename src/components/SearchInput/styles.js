import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 4rem 0rem;
  
  @media (max-width: 768px) {
    width: 95%;
    margin: 1.5rem 0rem;
  }
`;

export const FormStyle = styled.form`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    border: none;
    border-radius: 1rem;
    background: linear-gradient(35deg, #494949 0%, #313131 100%);
    padding: 0.5rem 3rem;
    font-size: 1.25rem;
    outline: none;
    color: #fff;
  }

  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.25rem;
  }
`;
