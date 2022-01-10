import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme/theme";
import GlobalStyles from "../../styles/globalStyles";
import { UserProvider } from "../hooks/useUser";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  function handleThemeChange() {
    currentTheme.name === "dark"
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <UserProvider>
        <Component {...pageProps} handleThemeChange={handleThemeChange} />
        <GlobalStyles />
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
