import { useState, useRef } from "react";

import { Button, Box, Modal } from "@mui/material";
import OpenCamera from "../create/OpenCamera";

export const CreateComponent = () => {
  const [openCamera, setOpenCamera] = useState(false);
  const handleOpenCamera = () => setOpenCamera(true);
  const handleCloseCamera = () => setOpenCamera(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "45%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "grid",
    placeItems: "center",
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ paddingTop: "100%" }}
    >
      <Button onClick={handleOpenCamera}>Create post now</Button>
      <Button>Upload a photo</Button>
      <Button>Live</Button>
      <Modal
        open={openCamera}
        onClose={handleCloseCamera}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} gap={2}>
          <OpenCamera />
        </Box>
      </Modal>
    </Box>
  );
};
