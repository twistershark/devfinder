import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Logo = styled.span`
  color: ${({ theme }) => theme.text_logo};
  font-size: 1.3rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const ThemeSwitcher = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  svg {
    font-size: 1rem;
  }
`;

export const ThemeName = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.7rem;
  letter-spacing: 2px;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;
