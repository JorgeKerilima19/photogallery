import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { MainContainer } from "./styles/styles.ts";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7ED957",
    },
    text: {
      primary: "#fff",
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
  },
});

ReactDOM.createRoot(document.getElementById("#root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MainContainer maxWidth="xl" disableGutters>
          <App />
        </MainContainer>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
