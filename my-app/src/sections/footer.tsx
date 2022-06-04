import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const StyledFooter = styled('footer')(({theme}: {theme: Theme}) => (`
  display: flex;
  padding: 15px;
  margin-top: 50px;
  height: auto;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 70px;
`));

const FooterText = styled('p')(({theme}: {theme: Theme}) => (`
  margin: 16px auto;
  width: 100px;
  text-align: center;
  color: ${theme.palette.text.secondary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`));

export default function Footer() {
  
  const webRepo = "https://github.com/jdmcdonagh/react-site";

  return (
    <StyledFooter>
      <FooterText onClick={() => window.open(webRepo, '_blank')}>
        {"Built using "}
        <FontAwesomeIcon icon={faReact} spin />
      </FooterText>
    </StyledFooter>
  );
}
