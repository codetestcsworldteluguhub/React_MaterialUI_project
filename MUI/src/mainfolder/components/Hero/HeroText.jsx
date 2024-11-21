import { Box,Typography } from '@mui/material';
import React from 'react';
import HeroDivider from './HeroDivider';

const HeroText = () => {
  return (
    <Box sx={{
        // border:"1px solid blue",
        justifyContent:"center",
        alignItems:"center",
        display:'flex',
        width:"100%",
        height:{xs:"100%",sm:"100%"},
        marginTop:{xs:"20px",sm:"20px"},
    }}>
      <Box>
        <HeroDivider />
      </Box>
      {/*<Typography variant='h4' fontWeight={'600'}>
        Post Graduate programme in data science
      </Typography>*/}
    </Box>
  );
}

export default HeroText;
