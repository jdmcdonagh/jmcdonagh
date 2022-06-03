import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';
import styled from 'styled-components';


export default function Header() {

  interface IconProps {
    icon: IconDefinition,
    desc: string,
  }

  const IconLink = ({icon, desc}: IconProps) => {
    const Links = styled('a')(({ theme }) => ({
      display: 'inline-block',
      marginLeft: 20,
      marginRight: 20,
      cursor: 'pointer',
    }));

    return (
      <Links>
        <IconButton aria-label={desc} size="small" color='error'>
          <FontAwesomeIcon icon={icon}/>
        </IconButton>
      </Links>
  )};

  const NavBar = styled('nav')(({ theme }) => ({
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      display: 'block'
    }
  }));

  const Logo = styled('h1')(({ theme }) => ({
    margin: 0,
    padding: '14px 0',
    '@media (max-width: 768px)': {
      fontSize: 30,
      textAlign: 'center',
    }
  }));

  const List = styled('ul')(({ theme }) => ({
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '@media (max-width: 768px)': {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: '4px 0 8px 0',
    }
  }));

  return (
    <NavBar>
      <Logo>James McDonagh</Logo>
      <List>
        <IconLink icon={faGithub}     desc="GitHub" />
        <IconLink icon={faLinkedinIn} desc="LinkedIn" />
        <IconLink icon={faEnvelope}   desc="Email" />
        <IconLink icon={faFileAlt}    desc="CV" />
      </List>
    </NavBar>
  );

}