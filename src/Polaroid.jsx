import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Polaroid = ({ imageUrl, description, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
              sx={{
                whiteSpace: "normal",
                overflow: "hidden",
                textOverflow: "ellipsis",
                wordBreak: "break-word",
                display: "block",
              }}
            >
              {index === 3 ? (
                // Instagram
                <Link
                  href={`https://instagram.com/${text.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "text.primary",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#003F66",
                    },
                  }}
                >
                  <InstagramIcon fontSize="small" style={{ marginRight: "3px" }} />
                  {text}
                </Link>
              ) : index === 4 ? (
                // Email
                <Link
                  href={`mailto:${text}`}
                  underline="none"
                  sx={{
                    color: "text.primary",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#003F66",
                    },
                  }}
                >
                  <MailIcon fontSize="small" style={{ marginRight: "3px" }} />
                  {text}
                </Link>
              ) : index === 2 ? (
                // Phone
                <Typography 
                  variant="body2"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon fontSize="small" style={{ marginRight: "3px" }} />
                  {text}
                </Typography>
              ) : (
                text
              )}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Polaroid;
