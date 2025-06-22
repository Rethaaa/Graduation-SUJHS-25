import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const videos = [
  {
    src: "./Video1.mp4",
  },
  {
    src: "./Video2.mp4",
  },
  {
    src: "./Video3.mp4",
  },
];

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      px={2}
    >
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <IconButton onClick={handlePrev}>
          <ArrowBackIos />
        </IconButton>

        <Box
          sx={{
            width: isMobile ? "100%" : 600,
            height: isMobile ? 220 : 340,
            position: "relative",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            backgroundColor: "#000",
          }}
        >
          <video
            src={videos[currentIndex].src}
            controls
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};

export default VideoCarousel;
