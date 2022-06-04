import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { ThemeToggle } from '../App';
import { styled } from "@mui/system";


export default function Footer() {
  
  const webRepo = "https://github.com/jdmcdonagh/react-site";

  const FooterText = styled('p')(({ theme }) => ({
    margin: '16px auto',
    width: 100,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    ':hover': {
      opacity: 0.7,
    }
  }));

  return (
    <React.Fragment>
      <FooterText onClick={() => window.open(webRepo, '_blank')}>
        {"Built using "}
        <FontAwesomeIcon icon={faReact} spin />
      </FooterText>
      <ThemeToggle />
    </React.Fragment>
  );
}
