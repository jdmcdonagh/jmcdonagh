import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Button, Card, Grid, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';
import ProjectCard from './projectCard';

export default function Projects() {

  return (
    <React.Fragment>
      <h1>Projects</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProjectCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );

}