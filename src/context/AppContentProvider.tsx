import AppContext from "./AppContext";
import { createTheme, Theme } from "@mui/material";

import { useState } from "react";

export const AppContextProvider = ({ children }: any) => {
  const createdTheme = createTheme({
    palette: {
      primary: {
        main: "#7ED957",
      },
      text: {
        primary: "#000",
      },
    },
    typography: {
      fontFamily: "Lato, sans-seriff",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: "Lato, sans-serif",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            position: "static",
          },
        },
      },
    },
  });

  const lightTheme = createTheme({
    ...createdTheme,
  });
  const darkTheme = createTheme({
    ...createdTheme,
    palette: {
      mode: "dark",
      primary: {
        main: "#7ED957",
      },
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fill: "#cdcdcd",
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          label: { color: "#C0C0C0" },
        },
      },
    },
  });

  const [theme, setTheme] = useState<Theme>(createdTheme);
  const [darkMode, setDarkMode] = useState(false);

  const switchTheme = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <AppContext.Provider
      value={{ theme, setTheme, lightTheme, darkTheme, darkMode, switchTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};
