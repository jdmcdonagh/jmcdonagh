import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from "@mui/system";
import { Project, ProjectButton } from '../data/projects';

const StyledCard = styled(Card)(({ theme }: any) => ({
  background: theme.palette.secondary.light,
  transition: `all ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.sharp}`,
  border: '1px solid #fff',
  borderColor: theme.palette.divider,
  boxShadow: theme.shadows[3],
  cursor: 'pointer',
  '&:hover, &:focus-within': {
    transform: 'translateY(-7px)',
    boxShadow: theme.shadows[9],
  }
}));

const StyledStackItem = styled('p')(({ theme, color }) => ({
  display: 'inline',
  marginRight: 6,
  marginBottom: -1, 
  fontWeight: 'bold',
  color: color,
}));

export const ProjectCard = ({type, title, stack, buttons}: Project)  => {

  const CardButton = ({text, link, variant, icon}: ProjectButton) => {
    return (
      <Button 
        size="small" 
        variant={variant}
        endIcon={icon && <FontAwesomeIcon icon={icon}/>}
        onClick={link ? () => window.open(link, '_blank') : undefined}
      >
        {text}
      </Button>
    );
  };

  type StackItemProps = {
    text: string,
    color: string,
  };

  const StackItem = ({text, color}: StackItemProps) => (
    <StyledStackItem color={color}>{text}</StyledStackItem> 
  );

  return (
    <StyledCard sx={{ minWidth: 200 }}>
      <CardContent>
        {/* Project Type */}
        <Typography sx={{ fontSize: 14 }} color="primary.light" gutterBottom>
          {type}
        </Typography>
        {/* Project Title */}
        <Typography sx={{ mb: 1.5, fontWeight: 'bold' }} variant="h5" color='text.primary' component="div">
          {title}
        </Typography>
        {/* Project Technology Stack */}
        <StyledStackItem>{'</>'}</StyledStackItem>
        {stack.map((s, i) =>
          <StackItem text={s.text} color={s.color} key={i} />
        )}
      </CardContent>
      {/* Project Buttons */}
      <CardActions>
        {buttons.map((b, i) => 
          <CardButton text={b.text} link={b.link} variant={b.variant} icon={b.icon} key={i} />
        )}
      </CardActions>
    </StyledCard>
  );
}