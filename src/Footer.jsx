import React from 'react';
import { Box, Typography, Divider, List, ListItem } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', color: '#333', px: 4, py: 6, mt: 8 }}>
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
            About Our Community
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
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
                <ListItem disableGutters>Aretha</ListItem>
                <ListItem disableGutters>Jemima</ListItem>
                <ListItem disableGutters>Kyna</ListItem>
                <ListItem disableGutters>Caroline</ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Yearbook Team</Typography>
                <List dense sx={{ pl: 2 }}>
                <ListItem disableGutters>1</ListItem>
                <ListItem disableGutters>2</ListItem>
                <ListItem disableGutters>3</ListItem>
                </List>
              </Box>

              <Box>
                <Typography variant="subtitle2" fontWeight={"Bold"}>Event Team</Typography>
                <List dense sx={{ pl: 2 }}>
                <ListItem disableGutters>1</ListItem>
                <ListItem disableGutters>2</ListItem>
                <ListItem disableGutters>3</ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" align="right">
            &copy; {new Date().getFullYear()} Our Community. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;