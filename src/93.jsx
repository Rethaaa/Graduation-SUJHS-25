import React, { useState } from "react";
import { Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import Polaroid from "./Polaroid";

// Scroll animation
const scroll = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
`;

const ScrollContainer = styled(Box)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  padding: "30px",
});

const ScrollContent = styled(Box)(({ isPaused }) => ({
  display: "inline-flex",
  whiteSpace: "nowrap",
  animation: `${scroll} 10s linear infinite`,
  animationPlayState: isPaused ? "paused" : "running",
}));

const polaroids = [
  {
    imageUrl: "./93-1.jpg",
    description: [
      "Anastasia Janice Wibhawa Hendradi",
      "18 Maret 2010",
      "0817181857",
      "@thyv_jeje",
      "jajalulelo@gmail.com",
      "Sometimes loneliness is the only rest we get, sometimes emptiness actually lets us forget and sometimes forgiveness is easiest in secret.”",
    ],
  },
  {
    imageUrl: "./93-2.jpg",
    description: [
      "Angela Genevieve Putri Samodro",
      "19 Januari 2010",
      "085218497268",
      "@angelamoodro",
      "angela.190110@gmail.com",
      "“Nilai merah tidak tumbang, lulus SMP puji Tuhan bang!”",
    ],
  },
];

const allPolaroids = [...polaroids, ...polaroids];

const InfiniteScrollPolaroids = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleOpen = (cardData) => setExpandedCard(cardData);
  const handleClose = () => setExpandedCard(null);

  return (
    <>
      <ScrollContainer>
        <ScrollContent isPaused={isPaused} speed={10}>
          {allPolaroids.map((data, index) => (
            <Polaroid
              key={index}
              imageUrl={data.imageUrl}
              description={data.description}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onClick={() => handleOpen(data)}
            />
          ))}
        </ScrollContent>
      </ScrollContainer>

      <Dialog open={Boolean(expandedCard)} onClose={handleClose} maxWidth="sm" fullWidth>
        {expandedCard && (
          <>
            <DialogTitle>{expandedCard.description[0]}</DialogTitle>
            <DialogContent>
              <Box
                component="img"
                src={expandedCard.imageUrl}
                alt="Expanded Polaroid"
                sx={{ width: "100%", borderRadius: 2, marginBottom: 2 }}
              />
              {expandedCard.description.map((text, i) => (
                <Typography key={i} variant="body1" gutterBottom>
                  {text}
                </Typography>
              ))}
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default InfiniteScrollPolaroids;
