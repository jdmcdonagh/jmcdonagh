import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Button, Card, Grid, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';
import { ProjectCard } from './projectCard';
import { Section } from './section';

export default function Projects() {

  type GridCardProps = {
    type: string,
    title: string,
  } 

  const GridCard = ({type, title}: GridCardProps) => (
    <Grid item xs={2} sm={4} md={4}>
      <ProjectCard type={type} title={title} />
    </Grid>
  );

  return (
    <Section title='Projects'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          <GridCard type='Personal Project' title='Title 1' />
          <GridCard type='Personal Project' title='Title 2' />
          <GridCard type='Personal Project' title='Title 3' />
          <GridCard type='Personal Project' title='Title 4' />
          <GridCard type='Personal Project' title='Title 5' />
          <GridCard type='Personal Project' title='Title 6' />
        </Grid>
      </Box>
    </Section>
  );

}