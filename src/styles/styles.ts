import styled from "@emotion/styled";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
} from "@mui/material";

export const MainContainer = styled(Container)({
  display: "flex",
  minHeight: "100vh",
  paddingTop: "2.75rem",
  gap: "2rem",
  justifyContent: "space-between",
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

export const ContainerLeft = styled(Container)({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 0 1rem 0.8rem",
  maxHeight: "95vh",
  position: "sticky",
  top: "0",
  marginLeft: "0",
  borderRightWidth: "2px",
  borderRightColor: "#212121",
  borderRightStyle: "solid",
});

export const BoxNoPageElements = styled(Box)({
  position: "absolute",
  top: 0,
  left: "100%",
  height: "100%",
  background: "white",
  minWidth: "18rem",
  borderRight: "thin solid black",
  zIndex:"100"
});

export const ContainerCenter = styled(Container)({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  padding: "0 0 1rem 0.8rem",
  alignItems: "center",
  width: "60%",
});

export const ContainerRight = styled(Container)({
  width: "35%",
});

export const CustomBottomNavigation = styled(BottomNavigation)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "auto",
  alignItems: "start",
});

export const CustomBottomNavigationAction = styled(BottomNavigationAction)({
  flexDirection: "row",
  gap: "0.5rem",
  alignItems: "center",
  "& .MuiBottomNavigationAction-label": {
    fontSize: "0.85rem",
  },
  color: "#242424",
  padding: "0",
  justifyContent: "space-between",
});
