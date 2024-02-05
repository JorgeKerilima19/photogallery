import { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";

import {
  PhotoCamera,
  Close,
  FiberManualRecord,
  StopCircle,
} from "@mui/icons-material";

import {
  CreateModalPaper,
  CreateVideoStyles,
  CreateImageStyles,
} from "../../styles/styles";

import { Container, Box, Typography } from "@mui/material";

const OpenCamera = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const [cameraAccessGranted, setCameraAccessGranted] =
    useState<boolean>(false);

  const [onCamera, setOnCamera] = useState(false);

  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setOnCamera(true);

      //solve the double click icon Camera :'v

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          setCameraAccessGranted(true);
          if (videoRef.current) {
            videoRef.current.style.display = "block";
          }
        };

        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = handleDataAvailable;
        setCapturedImage(null);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraAccessGranted(false);
    }
  };

  const handleStopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
    setCameraAccessGranted(false);
    setIsRecording(false);
    setOnCamera(false);
  };

  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      canvas.width = videoWidth;
      canvas.height = videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);
        const capturedImageDataUrl = canvas.toDataURL("image/png");
        setCapturedImage(capturedImageDataUrl);
      }
    }
  };

  const handleRecord = () => {
    if (mediaRecorderRef.current && !isRecording) {
      recordedChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      recordedChunksRef.current.push(event.data);
    }
  };

  return (
    <>
      <CreateModalPaper elevation={3}>
        <IconButton
          color="error"
          onClick={handleStopCamera}
          disabled={!cameraAccessGranted}
        >
          <Close />
        </IconButton>
        <IconButton
          color="warning"
          onClick={handleCapture}
          disabled={!cameraAccessGranted}
        >
          <PhotoCamera />
        </IconButton>
        <IconButton
          color="error"
          onClick={handleRecord}
          disabled={!cameraAccessGranted || isRecording}
        >
          <FiberManualRecord />
        </IconButton>
        <IconButton
          color="info"
          onClick={handleStopRecording}
          disabled={!cameraAccessGranted || !isRecording}
        >
          <StopCircle />
        </IconButton>
        {capturedImage && (
          <CreateImageStyles src={capturedImage} alt="Captured Image" />
        )}
      </CreateModalPaper>
      <Container>
        <>
          {onCamera ? (
            <CreateVideoStyles ref={videoRef} autoPlay playsInline />
          ) : (
            ""
          )}
        </>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle2">
            Plase click twice to start the camera
          </Typography>
          <IconButton
            color="primary"
            onClick={handleStartCamera}
            disabled={cameraAccessGranted}
          >
            <PhotoCamera sx={{ height: "2.25rem", width: "2.25rem" }} />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default OpenCamera;
