import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const images = [
  { src: './Camping.jpeg', title: 'Camping', description: 'Camping dengan tema "Finding God in Nature"...' },
  { src: './Live In.jpg', title: 'Live In', description: 'Live in dengan tema "New Experience, Become Inspirations"...' },
  { src: './Bazaar.jpg', title: 'Bazaar', description: 'Bazaar dengan tema "PUSPANUSA"...' },
  { src: './Retret.jpg', title: 'Retret', description: 'Retret adalah kegiatan perenungan dan penyegaran rohani...' },
];

export default function InfoKegiatan() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 1200 }}>
        {images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                width: isMobile ? '100%' : 200,
                height: 400,
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'width 0.4s ease',
                willChange: 'width',
                maxWidth: isMobile ? '90vw' : 'none',
                '&:hover': {
                  width: isMobile ? '100%' : 300,
                },
                '& img': {
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                },
                '&:hover img': {
                  transform: isMobile ? 'none' : 'translateX(0)',
                },
                '&:hover .overlay': {
                  opacity: isMobile ? 1 : 1,
                },
                '&:hover .icon-overlay': {
                  opacity: isMobile ? 0 : 0,
                },
              }}
            >
              <img src={img.src} alt={`Foto kegiatan ${img.title}`} loading="lazy" />
              <Box
                className="icon-overlay"
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                  bgcolor: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  display: isMobile ? 'none' : 'flex', // 👈 Hide on mobile
                  alignItems: 'center',
                  padding: '4px 8px',
                  borderRadius: 1,
                  gap: 1,
                  transition: 'opacity 0.3s ease',
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
                  opacity: isMobile ? 0 : 0, // 👈 Show always on mobile
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
                <Typography variant="body2">{img.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
