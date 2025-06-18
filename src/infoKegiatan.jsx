import { Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const images = [
  { src: './Camping.jpg', title: 'Camping', description: 'Camping dengan tema "Finding God in Nature" adalah sebuah pengalaman spiritual di tengah keindahan alam ciptaan-Nya. Dalam keheningan hutan, suara aliran sungai, dan langit malam yang bertabur bintang, peserta diajak untuk merenungkan kebesaran Tuhan, memperdalam iman, serta menemukan damai dan makna hidup melalui keajaiban alam. Kegiatan ini menggabungkan waktu teduh, diskusi rohani, serta aktivitas alam yang membangkitkan rasa syukur dan kekaguman akan karya Sang Pencipta.' },
  { src: './Live In.jpg', title: 'Live In', description: 'Live in dengan tema "New Experience, Become Inspirations" adalah program pembelajaran langsung di tengah kehidupan masyarakat yang sederhana namun penuh makna. Melalui pengalaman baru tinggal dan berinteraksi dengan warga lokal, peserta diajak untuk membuka hati, belajar dari kehidupan nyata, serta menemukan nilai-nilai kehidupan yang dapat menginspirasi diri sendiri dan orang lain. Program ini menumbuhkan empati, rasa syukur, dan semangat untuk membawa perubahan positif setelah kembali ke lingkungan masing-masing.' },
  { src: './Bazaar.jpg', title: 'Bazaar', description: 'Bazaar dengan tema "PUSPANUSA" — singkatan dari Puspa Nusantara — adalah perayaan meriah yang menampilkan keindahan dan keragaman budaya Indonesia. Melalui aneka kuliner tradisional, kerajinan tangan, busana daerah, serta pertunjukan seni dari berbagai penjuru Nusantara, acara ini menjadi wadah untuk mengenal, mencintai, dan melestarikan kekayaan budaya bangsa. "PUSPANUSA" bukan sekadar bazaar, melainkan pengalaman budaya yang menyatukan warna-warni Indonesia dalam satu harmoni yang memikat.' },
  { src: './Retret.jpg', title: 'Retret', description: 'Retret adalah kegiatan perenungan dan penyegaran rohani yang dilakukan dalam suasana tenang dan jauh dari hiruk-pikuk keseharian. Melalui sesi refleksi, doa, sharing, dan pembinaan iman, peserta diajak untuk lebih mengenal diri, memperdalam relasi dengan Tuhan, serta menemukan arah dan makna hidup yang baru. Retret menjadi momen istimewa untuk berhenti sejenak, mendengarkan suara hati, dan kembali dengan semangat serta kedamaian yang diperbarui.' },
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
                  display: isMobile ? 'none' : 'flex',
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
                  opacity: isMobile ? 0 : 0,
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
