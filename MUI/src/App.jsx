
import React,{ useState } from 'react'
import { Box, ThemeProvider,createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import Landingpage from './mainfolder/pages/landingpage';

const MyOwnButton = styled(Button)({
  backgroundColor: "blue"
})

const App = () => {
  const [mode, setMode] = useState('light')

  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={'background.default'}>
      <Landingpage mode={mode} setMode={setMode} />
    </Box>
    </ThemeProvider>
  );
}

export default App;
