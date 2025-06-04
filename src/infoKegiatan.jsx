import { Grid, Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const images = [
  { src: '/Graduation-SUJHS-25/images/a.png', title: 'Image A', description: 'This is description A' },
  { src: '/Graduation-SUJHS-25/images/b.png', title: 'Image B', description: 'This is description B' },
  { src: '/Graduation-SUJHS-25/images/c.png', title: 'Image C', description: 'This is description C' },
  { src: '/Graduation-SUJHS-25/images/d.png', title: 'Image D', description: 'This is description D' },
];

export default function infoKegiatan () {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: 1200 }}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                position: 'relative',
                width: 200,
                height: 400,
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'width 0.4s ease',
                willChange: 'width',
                '&:hover': {
                  width: 300,
                },
                '& img': {
                  height: '100%',
                  width: 'auto',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                },
                '&:hover img': {
                  transform: 'translateX(0)',
                },
                '&:hover .overlay': {
                  opacity: 1,
                },
                '&:hover .icon-overlay': {
                  opacity: 0,
                }
              }}
            >
              <img src={img.src} alt={img.title} />
              <Box
                className="icon-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 8px',
                  borderRadius: 1,
                  gap: 1,
                }}
              >
                <InfoIcon sx={{ fontSize: 16 }} />
                <Typography variant="body1">{img.title}</Typography>
              </Box>
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  padding: '10px',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <InfoIcon sx={{ fontSize: 16 }} />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {img.title}
                </Typography>
                <Typography variant="body2">
                  {img.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};