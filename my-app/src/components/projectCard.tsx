import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { IconButton, Button, Card, CardMedia, CardContent, CardActions, Typography, Box } from '@mui/material';

export default function ProjectCard() {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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
          Personal Project
        </Typography>
        <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} variant="h5" component="div">
          Title Text
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