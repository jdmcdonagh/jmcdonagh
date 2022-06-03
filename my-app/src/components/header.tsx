import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Box } from '@mui/material';

export default function Header() {

  interface IconProps {
    icon: IconDefinition,
    desc: string,
  }

  const Icon = ({icon, desc}: IconProps) => (
    <a
      style={{
        display: 'inline-block',
        marginLeft: 20,
        marginRight: 20,
        cursor: 'pointer',
      }}
    >
      <IconButton aria-label={desc} size="small" color="primary">
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </a>
  );

  // const Header = styled('header')(({ theme }) => ({
  //   display: 'block',
  //   top: 0,
  //   width: '100%',
  //   borderBottom: '1px solid #eee',
  //   marginBottom: 10,
  //   ':before': {
  //     content: ' ',
  //   }
  // }));

  return (
    <Box
      sx={{
        display: 'block',
        top: 0,
        width: '100%',
        borderBottom: '1px solid #eee',
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: 'block',
          float: 'left',
        }}
        >
        <h1>James McDonagh</h1>
      </div>
      <nav
        style={{
          display: 'inline-block',
          float: 'right',
          marginTop: 27,
        }}
      >
        <Icon icon={faGithub} desc="GitHub" />
        <Icon icon={faLinkedinIn} desc="LinkedIn" />
        <Icon icon={faEnvelope} desc="Email" />
        <Icon icon={faFileAlt} desc="CV" />
      </nav>
    </Box>
  );

}