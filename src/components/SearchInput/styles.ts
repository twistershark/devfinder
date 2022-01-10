import styled from "styled-components";

export const Container = styled.label`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;

  background: ${({ theme }) => theme.background_card};
  border-radius: 8px;

  padding: 0.4rem 0.4rem 0.4rem 0.8rem;

  svg {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;

  font-family: "Space Mono", monospace;
  color: ${({ theme }) => theme.text};

  font-size: 0.8rem;

  &::placeholder {
    font-size: 0.72rem;
    color: ${({ theme }) => theme.text_placeholder};
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;

    &::placeholder {
      font-size: 1rem;
    }
  }
`;

export const SearchButton = styled.button`
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  cursor: pointer;

  color: ${({ theme }) => theme.text_button};
  font-family: "Space Mono", monospace;
  font-size: 0.8rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
