import React from 'react';
import { Box, Container  } from "@mui/material";
import NavBar from '../components/navsection/NavBar';
import HeroSection from '../components/Hero/HeroSection';
import Accordionsection from '../components/Accordionsection';
import CardDisplay from '../components/cardsection/CardDisplay';
import MainTab from '../components/Tabsection/MainTab';
import MainGraph from '../components/Graphsection/MainGraph';

const Landingpage = ({mode,setMode}) => {
  return (
    <Container>
        <Box>
          <NavBar mode={mode} setMode={setMode} />
          <HeroSection />
          <Accordionsection />
          <CardDisplay />
          <MainTab />
          <MainGraph />
          
        </Box>
    </Container>
    
  );
}

export default Landingpage;
