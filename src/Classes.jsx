import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Paper } from '@mui/material';
import Class1 from "./91";
import Class2 from "./92";
import Class3 from "./93";
import Class4 from "./94";
import Class5 from "./95";

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

export default function Classes() { 
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Class of 2025
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="91" />
        <Tab label="92" />
        <Tab label="93" />
        <Tab label="94" />
        <Tab label="95" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Class1 />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Class2 />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <Class3 />
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <Class4 />
      </TabPanel>
      
      <TabPanel value={tabValue} index={4}>
        <Class5 />
      </TabPanel>
    </Box>
  );
}