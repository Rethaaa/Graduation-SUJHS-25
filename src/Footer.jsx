import React from 'react';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#002A45', color: '#fff', px: 4, py: 6, mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 4
        }}
      >
        {/* Left: Community Description */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            About Class of 2025
          </Typography>
          <Typography variant="body2">
            Siswi Santa Ursula Jakarta tahun 2025 memiliki perjalanan dengan semangat pantang menyerah (persistence), ketangguhan dalam menghadapi tantangan (resilience), dan kebersamaan (unity). Seperti burung layang-layang (swallow bird) yang bermigrasi dalam kelompok dengan ketekunan dan kerja sama, Sanurian’25 tumbuh bersama, saling mendukung, dan menggapai mimpi secara kolektif. 
          </Typography>
        </Box>

        {/* Right: Credits and Copyright */}
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Credits
            </Typography>

            <Box sx={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Tech Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters><Typography variant="body2">Aretha Hartono</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Jemima Arcella Hasian Allagan</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Kyna Audenie Kamal</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Caroline Regina Darwis</Typography></ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Yearbook Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters><Typography variant="body2">Emilie Soesanto</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Kenisha Djohan Young</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Kayla Almyra Wardhana</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Lucia Nera Candra Puntadewa</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Catleen Mulan Tyas Ho</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Latisha Lowena Lynd</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Regina Gracia Johanes</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Valika Arum Murtani</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Aubrey Olivia Arifin</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Perlita Garcia</Typography></ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Event Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem disableGutters><Typography variant="body2">Ivana Natasya Quinn Ginting</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Samantha Angelina Malau</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Jessica Susanto</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Kimie Pratono Wijaya</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Gabriella Michelle Budojo</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Samantha Elaine Gunawan</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Aretha Hartono</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Milliana Romauli</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Anastasia Nadia Ivanna Putri</Typography></ListItem>
                  <ListItem disableGutters><Typography variant="body2">Celestine Aiko Erdest</Typography></ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2, background: "#fff" }} />

          <Typography variant="body2" align="right">
            &copy; {new Date().getFullYear()} Santa Ursula Junior High School Class of 2025. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;