import styled from "styled-components";

export const Container = styled.div`
  grid-area: stats;

  border-radius: 8px;

  background: ${({ theme }) => theme.background};

  padding: 1em 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Category = styled.span`
  color: ${({ theme }) => theme.text_secondary};
  font-size: 0.8rem;
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

export const Data = styled.span`
  color: ${({ theme }) => theme.text};
  font-weight: 700;

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;
