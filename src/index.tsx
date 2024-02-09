import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { MainContainer } from "./styles/styles.ts";
import { AppContextProvider } from "./context/AppContentProvider.tsx";
import AppContext from "./context/AppContext.tsx";

//Create a component to use hooks

const Root = () => {
  const { darkMode, lightTheme, darkTheme } = useContext(AppContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <MainContainer maxWidth="xl" disableGutters>
        <App />
      </MainContainer>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("#root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Root />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
