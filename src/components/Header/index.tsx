import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "styled-components";
import { Container, Logo, ThemeSwitcher, ThemeName } from "./styles";

interface HeaderProps {
  handleThemeChange: () => void;
}

export function Header({ handleThemeChange }: HeaderProps) {
  const theme = useTheme();

  return (
    <Container>
      <Logo>devfinder</Logo>
      <ThemeSwitcher onClick={handleThemeChange}>
        <ThemeName>{theme.name === "dark" ? "LIGHT" : "DARK"}</ThemeName>
        {theme.name === "dark" ? (
          <FiSun color={theme.text} />
        ) : (
          <FiMoon color={theme.text} />
        )}
      </ThemeSwitcher>
    </Container>
  );
}
