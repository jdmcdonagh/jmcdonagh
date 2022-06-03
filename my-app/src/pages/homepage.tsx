import React from 'react';
import Header from '../components/header';
import Projects from '../components/projects';
import About from '../components/about';
import Footer from '../components/footer';
import styled from 'styled-components';

const axios = require('axios').default;

export const Homepage = () => {

  const AppFrame = styled('div')(({ theme }) => ({
    margin: '0 max(4vw, 20px)',
  }));

  return (
    <React.Fragment>
      <Header />
      <AppFrame>
        <About />
        <Projects />
        <Footer />
      </AppFrame>
    </React.Fragment>
  );
}
