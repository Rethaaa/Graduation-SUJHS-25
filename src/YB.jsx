import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Paper, List, ListItem } from '@mui/material';

function TabPanel({ value, index, children }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const misi = [
  "Mengembangkan setiap anggota komunitas pembelajar menjadi pribadi  yang utuh dalam kebebasan, cinta kasih dan kebenaran kristiani.", 
  "Memadukan kebudayaan dan iman, sehingga mereka dapat menjadi ragi dalam masyarakat.", 
  "Mengusahakan dan membentuk komunitas pembelajar agar mampu bekerja dengan aktif bagi pembangunan masyarakat yang lebih adil dan manusiawi."
];

export default function YB() { 
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Yearbook
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Logo & Mascot" />
        <Tab label="Visi & Misi" />
        <Tab label="Mars" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="./Logo.png"
                alt="Logo"
                width={200}
                sx={{borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1">
                Graduation siswi Santa Ursula Jakarta tahun 2025 mengangkat tema MOSAIC: Marks of Persistence United with Resilience, yang mencerminkan perjalanan Sanurian’25 dengan semangat pantang menyerah (persistence), ketangguhan dalam menghadapi tantangan (resilience), dan kebersamaan (unity). Seperti burung layang-layang (swallow bird) yang bermigrasi dalam kelompok dengan ketekunan dan kerja sama, Sanurian’25 tumbuh bersama, saling mendukung, dan menggapai mimpi secara kolektif. Maskot burung layang-layang dalam gaya mosaik dipilih sebagai simbol ketangguhan, persatuan, dan nilai SERVIAM yang menjadi fondasi dalam tiga tahun perjalanan kami di SMP Santa Ursula Jakarta.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={5} sx={{display: 'flex', alignItems: 'center'}}>
            <Grid>
              <Box>
                <Typography variant="h5">
                  Visi
                </Typography>
                <Typography>
                  Komunitas pembelajar yang berkarakter SERVIAM , berwawasan global, dan berbasis teknologi.
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography variant="h5">
                  Misi
                </Typography>
                <Typography>
                  <List dense component="ol" sx={{ listStyleType: "decimal", pl: 2 }}>
                    {misi.map((misi, index) => (
                      <ListItem
                        key={index}
                        sx={{ display: "list-item", pl: 1 }}
                      >
                        <Typography variant="body2">{misi}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={5} sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Grid>
              <Box>
                <Typography variant="h5">
                  Mars SERVIAM
                </Typography>
                <Typography>
                  Kami adalah kusuma bangsa <br />
                  Segar bugar pun muda belia <br />
                  Bersatu padu serentak maju <br />
                  Ke arah luhur kami menuju <br />
                  Kami sadari panggilan Tuhan <br />
                  Hidup suci menjadi teladan <br /><br />
                  Reff:<br />
                  Kristus Pribadi yang menyinari<br />
                  Maria Bunda pembimbing kami<br />
                  Majulah! Peganglah semboyan<br />
                  Serviam! Serviam!<br />
                  Tetap teguh, SERVIAM!<br /><br />

                  Kami adalah harapan bangsa<br />
                  Hidup subur di taman gereja<br />
                  Pada kami terlimpah kurnia<br />
                  Untuk menyimpan iman sentosa<br />
                  Iman laksana cahaya surya<br />
                  Ke sluruh dunia akan kubawa<br /><br />

                  Reff<br /><br />

                  Kami adalah pemuda bangsa<br />
                  baikpun suka maupun duka<br />
                  Jejak kami akan tetap pasti<br />
                  Luhur, jujur pun berendah hati<br />
                  Sesama penuh kami sayangi<br />
                  Menurut hukum dasar Ilahi<br /><br />

                  Reff
                </Typography>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Typography variant="h5">
                  Mars Santa Ursula
                </Typography>
                <Typography>
                  Santa Ursula, Santa Pelindung Sekolahku yang Tercinta<br />
                  Doakan kami agar bertekun mengisi masa muda<br />
                  Marilah kawan giat belajar<br />
                  Demi masa depan kita<br />
                  Melangkah maju<br /> 
                  Raihlah cita<br />
                  Wujudkan impianmu<br />
                  Bertanggung jawab, setia, dan jujur<br />
                  Bertakwa pada Tuhan<br /><br />
                  
                  Santa Ursula, Santa Pelindung Sekolahku yang Tercinta<br />
                  Doakan kami agar bertekun mengisi masa muda<br />
                  Marilah kawan giat belajar<br />
                  Demi masa depan kita<br />
                  Melangkah maju<br /> 
                  Raihlah cita<br />
                  Wujudkan impianmu<br />
                  Dalam lindungan Tuhan Yang Esa,<br />
                  Ursula tetap jaya!<br />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </TabPanel>
    </Box>
  );
}