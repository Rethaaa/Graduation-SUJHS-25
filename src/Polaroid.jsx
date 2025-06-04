import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const Polaroid = ({ imageUrl, description, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      sx={{
        width: 250,
        backgroundColor: "#fff",
        border: "8px solid white",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 2,
        margin: "0 10px",
        flexShrink: 0,
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Polaroid"
        sx={{
          width: "100%",
          height: 250,
          objectFit: "cover",
          borderBottom: "1px solid #eee",
        }}
      />
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          {description.map((text, index) => (
            <Typography
              key={index}
              variant="body2"
              align="center"
              sx={{ marginBottom: 0.5 }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Polaroid;
