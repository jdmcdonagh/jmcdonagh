import React from 'react';
import Header from '../sections/header';
import Projects from '../sections/projects';
import About from '../sections/about';
import Footer from '../sections/footer';
import { styled } from "@mui/system";

const axios = require('axios').default;


export const Homepage = () => {

  const BigDiv = styled('div')(({ theme }) => ({
    background: theme.palette.background.default,
    height: 'max(1000px, 100%)',
  }));

  const AppFrame = styled('div')(({ theme }) => ({
    margin: '0 max(4vw, 20px)',
  }));

  return (
    <BigDiv>
      <Header />
      <AppFrame>
        <About />
        <Projects />
        <Footer />
      </AppFrame>
    </BigDiv>
  );
}
