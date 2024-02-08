import { useState, useRef } from "react";

import { Button, Box, Modal } from "@mui/material";
import OpenCamera from "../create/OpenCamera";

export const CreateComponent = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const handleOpenCamera = () => setOpenCamera(true);
  const handleCloseCamera = () => setOpenCamera(false);

  const style = {
    position: "absolute" as "absolute",
    top: { xs: 0, md: "50%" },
    left: { xs: 0, md: "50%" },
    transform: { sx: "unset", md: "translate(-50%, -50%)" },
    width: { xs: "100%", md: "50%" },
    bgcolor: "background.paper",
    boxShadow: 24,
    p: { xs: 1, md: 4 },
    display: "grid",
    placeItems: "center",
    height: "calc(100% - 4rem)",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button onClick={handleOpenCamera}>Create post now</Button>
      <Button>Upload a photo</Button>
      <Button>Live</Button>
      <Modal open={openCamera} onClose={handleCloseCamera}>
        <Box sx={style} gap={2}>
          <OpenCamera />
        </Box>
      </Modal>
    </Box>
  );
};
