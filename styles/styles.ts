import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 2rem auto;
    max-width: 550px;
  }

  @media (min-width: 1024px) {
    margin: 4rem auto;
    max-width: 800px;
  }
`;
