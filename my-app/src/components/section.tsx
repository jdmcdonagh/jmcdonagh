import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import { Theme } from '../styles/theme';
import sr from '../utils/sr';
import { srConfig } from '../config';

const Title = styled('h1')(({theme}: {theme: Theme}) => (`
  margin: 50px 0 40px 0;
  text-align: center;
  color: ${theme.palette.text.primary};
  font-size: ${theme.size.text.heading};
`));

export const Section = ({...props}) => {

  const revealTitle = useRef<any>(null);

  useEffect(() => {
    sr!.reveal(revealTitle.current, srConfig({delay: 700}));
  }, []);

  return (
    <React.Fragment>
      <Title ref={revealTitle}>{props.title}</Title>
      {props.children}
    </React.Fragment>
  );
}
