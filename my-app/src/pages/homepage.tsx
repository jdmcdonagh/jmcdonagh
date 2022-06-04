import { useEffect, useState } from 'react';
import Header from '../sections/header';
import Projects from '../sections/projects';
import About from '../sections/about';
import Footer from '../sections/footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Frame = styled.div`
  margin: 0 max(4vw, 20px);
`;

export const Homepage = () => {

  return (
    <Wrapper>
      <Header />
      <Frame>
        <Projects />
      </Frame>
      <Footer />
    </Wrapper>
  );
}
