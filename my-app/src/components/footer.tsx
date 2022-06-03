import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { ThemeToggle } from '../App';

export default function Footer() {

  const Seperator = styled('hr')(({ theme }) => ({
    marginTop: 20,
    marginBottom: 0,
    border: 0,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  }));

  const FooterText = styled('p')(({ theme }) => ({
    textAlign: 'center',
  }));

  return (
    <React.Fragment>
      <FooterText>
        {"Running on "}
        <FontAwesomeIcon icon={faReact} />
      </FooterText>
      <ThemeToggle />
    </React.Fragment>
  );
}
