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
                  <ListItem variant="body2" disableGutters><Typography>Aretha Hartono</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Jemima Arcella Hasian Allagan</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Kyna Audenie Kamal</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Caroline Regina Darwis</Typography></ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Yearbook Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem variant="body2" disableGutters><Typography>Emilie Soesanto</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Kenisha Djohan Young</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Kayla Almyra Wardhana</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Lucia Nera Candra Puntadewa</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Catleen Mulan Tyas Ho</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Latisha Lowena Lynd</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Regina Gracia Johanes</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Valika Arum Murtani</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Aubrey Olivia Arifin</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Perlita Garcia</Typography></ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Event Team</Typography>
                <List dense sx={{ pl: 2 }}>
                  <ListItem variant="body2" disableGutters><Typography>Ivana Natasya Quinn Ginting</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Samantha Angelina Malau</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Jessica Susanto</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Kimie Pratono Wijaya</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Gabriella Michelle Budojo</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Samantha Elaine Gunawan</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Aretha Hartono</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Milliana Romauli</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Anastasia Nadia Ivanna Putri</Typography></ListItem>
                  <ListItem variant="body2" disableGutters><Typography>Celestine Aiko Erdest</Typography></ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" align="right">
            &copy; {new Date().getFullYear()} Santa Ursula Junior High School Class of 2025. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;