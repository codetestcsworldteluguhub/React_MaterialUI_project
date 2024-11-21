import { Box } from '@mui/material';
import React from 'react';

const HeroImage = () => {
  return (
    <Box sx={{ width:'400px',display:'flex',flexDirection:'center',
      justifyContent:'center',alignItems:'center',textAlign:'center',
      width:'100%'
    }}>
      <img src='assets/student.jpg' style={{width:'300px',height:'500px'}}/>
    </Box>
  );
}

export default HeroImage;
