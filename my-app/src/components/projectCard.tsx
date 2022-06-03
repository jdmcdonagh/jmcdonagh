import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Button, Card, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';

type ProjectCardProps = {
  type: string,
  title: string,
}

export const ProjectCard = ({type, title}: ProjectCardProps)  => {

  return (
    <Card sx={{ minWidth: 200 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {type}
        </Typography>
        <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} variant="h5" component="div">
          {title}
        </Typography>
        <Typography>
          React, Typescript
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<FontAwesomeIcon icon={faGithub}/>}>GitHub</Button>
        <Button variant="contained" size="small">Demo</Button>
      </CardActions>
    </Card>
  );
}