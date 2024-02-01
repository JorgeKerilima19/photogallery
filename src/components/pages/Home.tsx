import { Box, Typography } from "@mui/material";
import React from "react";
import { UserAvatar } from "../homepage/UserAvatar";
import { ContainerCenter } from "../../styles/styles";

export const HomePage = () => {
  return (
    <ContainerCenter>
      <Box display="flex" alignItems="center" justifyContent="center">
        <UserAvatar />
      </Box>
    </ContainerCenter>
  );
};
