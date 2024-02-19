import AppContext from "./AppContext";
import { createTheme, Theme } from "@mui/material";

import { useState, useEffect } from "react";

export const AppContextProvider = ({ children }: any) => {
  //theme

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

  //users

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        lightTheme,
        darkTheme,
        darkMode,
        switchTheme,
        users,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
