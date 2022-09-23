import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"80px"}}>
      <AppBar sx={{backgroundColor:"black"}} position="fixed">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily:"cursive", padding:"10px 10px"}}>
            Restaurant App
          </Typography>
      </AppBar>
    </Box>
  );
}

export default NavBar;