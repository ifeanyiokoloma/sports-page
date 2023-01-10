import React, { useMemo } from "react";
import { ColorModeContext } from "../context";
import { createTheme, useMediaQuery } from "@mui/material/styles";

const ColorModeContextProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#0052cc",
          },
          secondary: {
            main: "#edf2ff",
          },
          mode: prefersDarkMode ? "dark" : "light",
        },
      })[prefersDarkMode]
  );

  const [mode, setMode] = React.useState(prefersDarkMode);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, theme, mode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
