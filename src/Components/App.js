import React from 'react';
import Header from './ui/header';
import CustomizedSteppers from './ui/stepper';
import {ThemeProvider} from '@mui/material/styles';
import theme from './ui/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <CustomizedSteppers/>
    </ThemeProvider>
  );
}

export default App;
