import styled from "@emotion/styled";
import { BottomNavigation } from "@mui/material";

export const CustomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  margin: "2em",
});

export const CustomBottomNavigation = styled(BottomNavigation)({
  display: "flex",
  "@media (max-width: 600px)": {
    flexDirection: "column",
  },
});
