import React, { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import { Autocomplete, TextField, Button, useMediaQuery, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/header';
import ProjectCard from '../components/projectCard';
import Projects from '../components/projects';
import About from '../components/about';
import Footer from '../components/footer';
const axios = require('axios').default;

function Homepage() {

  return (
    <React.Fragment>
      <Header />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
