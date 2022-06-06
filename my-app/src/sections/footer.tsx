import React, { useEffect, useRef } from 'react';
import { FaReact } from "react-icons/fa";
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import sr from '../utils/sr';
import { srConfig } from '../config';

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
  width: 200px;
  text-align: center;
  color: ${theme.palette.text.secondary};
  cursor: pointer;
  transition: ${theme.transitions.all};
  font-size: ${theme.size.text.md};

  &:hover {
    color: ${theme.palette.other.blue};
    svg {
      color: ${theme.palette.other.blue};
    }
  }

  svg {
    color: ${theme.palette.text.secondary};
    font-size: ${theme.size.text.lg};
    transition: ${theme.transitions.all};
    vertical-align: text-bottom;
  };
`));

export default function Footer() {
  
  const webRepo = "https://github.com/jdmcdonagh/react-site";
  const revealFooter = useRef<any>(null);

  useEffect(() => {
    sr!.reveal(revealFooter.current, srConfig({delay: 1100}));
  }, []);

  return (
    <StyledFooter ref={revealFooter}>
      <FooterText onClick={() => window.open(webRepo, '_blank')}>
        {"Built using "}
        <FaReact />
      </FooterText>
    </StyledFooter>
  );
}
