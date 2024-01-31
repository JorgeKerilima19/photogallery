import styled from "@emotion/styled";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

export const MainContainer = styled("div")({
  display: "flex",
  minHeight: "100vh",
  paddingTop: "1.25rem",
  "@media (max-width: 600px)": {
    paddingTop: "0.5rem",
  },
});

export const CustomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  margin: "2em",
});

export const BoxMenuLeft = styled(Box)({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 0 1rem 0.8rem",
});

export const CustomBottomNavigation = styled(BottomNavigation)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "auto",
  alignItems: "start",
});

export const CustomBottomNavigationAction = styled(BottomNavigationAction)({
  display: "flex",
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.85rem",
  },
  color: "#242424",
  padding: "0",
});
