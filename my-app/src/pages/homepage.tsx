import React from 'react';
import Header from '../sections/header';
import Projects from '../sections/projects';
import About from '../sections/about';
import Footer from '../sections/footer';
// import { styled } from "@mui/system";
import { ThemeToggle } from '../App';
import styled from 'styled-components';


export const Homepage = () => {

  // const BigDiv = styled('div')(({ theme }) => ({
  //   // background: theme.palette.background.default,
  //   background: 'red',
  //   height: 'max(1000px, 100%)',
  // }));

  // const AppFrame = styled('div')(({ theme }) => ({
  //   margin: '0 max(4vw, 20px)',
  // }));

  const Frame = styled.div`
  margin: '0 max(4vw, 20px)';
  `;

  const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${({ theme }) => theme.palette.primary.main};
  border: 2px solid ;
  `;

  return (
    <>
      <h1>test</h1>
      <ThemeToggle />
      <Header />
      <Frame>
        <About />
        <Projects />
        <Footer />
      </Frame>
    </>
  );
}
