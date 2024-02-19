import styled from "@emotion/styled";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Paper,
} from "@mui/material";

export const MainContainer = styled(Container)({
  display: "flex",
  minHeight: "100vh",
  padding: "2.75rem 0",
  gap: "2rem",
  justifyContent: "flex-end",
  "@media (max-width: 600px)": {
    paddingTop: "0.5rem",
  },
  "@media (max-width: 1200px)": {
    justifyContent: "center",
    gap: "0",
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
  zIndex: "999",
  flexDirection: "column",
  justifyContent: "space-between",
  maxHeight: "95vh",
  position: "fixed",
  top: "0",
  left: "0",
  minHeight: "100vh",
  marginLeft: "0",
  borderRightWidth: "2px",
  borderRightColor: "#212121",
  borderRightStyle: "solid",
  overflow: "hidden",
  "@media (max-width: 899px)": {
    //fix the 900 mid screen bug
    top: "unset",
    bottom: 0,
    minHeight: "4rem",
    maxHeight: "4rem",
    flexDirection: "row",
    width: "100%  ",
    justifyContent: "center",
    borderTop: "thin solid",
  },
});

export const BoxNoPageElements = styled(Box)({
  position: "fixed",
  top: 0,
  height: "100%",
  minWidth: "18rem",
  borderRight: "thin solid",
  zIndex: "100",
  paddingTop: "2rem",
});

export const ContainerCenter = styled(Container)({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  padding: "0 0 1rem 0.8rem",
  alignItems: "center",
  width: "max(60%,40rem)",
  margin: "auto 0",
  "@media (max-width: 800px)": {
    width: "100%",
  },
});

export const ContainerRight = styled(Container)({
  width: "min(20rem,35%)",
  margin: 0,
});

export const CustomBottomNavigation = styled(BottomNavigation)({
  display: "flex",
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
  "&.Mui-selected .MuiSvgIcon-root": {
    fill: "#7ED957",
  },
  color: "#242424",
  padding: "0",
  justifyContent: "space-between",
});

//Create Elements

export const CreateModalPaper = styled(Paper)({
  textAlign: "center",
  padding: 2,
});

export const CreateVideoStyles = styled("video")({
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "0 auto",
  display: "none",
});

export const CreateImageStyles = styled("img")({
  maxWidth: "50%",
  maxHeight: "100%",
  margin: "0 auto",
  display: "block",
});

export const ProfileContainer = styled(Container)({
  width: "min(95%,45rem)",
  display: "block",
});
