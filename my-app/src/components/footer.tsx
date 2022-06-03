import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons'
import { IconButton, Button, Card, Grid, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';
import ProjectCard from './projectCard';

export default function Footer() {

  return (
    <React.Fragment>
      <hr />
      <p
        style={{
          textAlign: 'center',
        }}
      >
        {"Running on "}
        <FontAwesomeIcon icon={faRaspberryPi} />
        {" 4"}
      </p>
      
    </React.Fragment>
  );

}