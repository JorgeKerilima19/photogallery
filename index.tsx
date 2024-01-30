import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
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
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
