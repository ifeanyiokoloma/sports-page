import About from "./components/About";
import Career from "./components/Career";
import Contracts from "./components/Contracts";
import Deals from "./components/Deals";
import Draft from "./components/Draft";
import Hero from "./components/Hero";
import Marketing from "./components/Marketing";
import Performance from "./components/Performance";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import { ThemeProvider } from "@mui/system";
import {
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { ColorModeContext } from "./context";
import { useMemo, useState } from "react";

function App() {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#ffa500",
          },
          secondary: {
            main: "#ccccff",
          },
          darker: {
            dark: "#8e8eb2",
          },
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: { main: "#ffa500" },
                secondary: { main: "#ccccff" },
              }
            : {
                // palette values for dark mode
                secondary: {
                  main: "rgba(255, 255, 255, 0.12)",
                },
              }),
        },
        typography: {
          body1: {
            fontWeight: 300,
            fontFamily: "'Saira', sans-serif",
          },
        },
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout>
          <Hero />
          <About />
          <Contact />
          <Draft />
          <Contracts />
          <Deals />
          <Performance />
          <Career />
          <Marketing />
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
