import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"80px"}}>
      <AppBar sx={{backgroundColor:"black"}} position="fixed">
          <Typography
          sx={{cursor:"pointer", flexGrow: 1, fontFamily:"cursive", padding:"10px 10px"}}
          onClick={() => navigate("/")}
           variant="h6" component="div">
            Restaurant App
          </Typography>
      </AppBar>
    </Box>
  );
}

export default NavBar;