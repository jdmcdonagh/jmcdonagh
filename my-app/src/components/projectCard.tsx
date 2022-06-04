import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';
import { Project, ProjectButton } from '../data/projects';
import styled from "styled-components";

// const StyledCard = styled(Card)(({ theme }: any) => ({
//   background: theme.palette.secondary.light,
//   transition: `all ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.sharp}`,
//   border: '1px solid #fff',
//   borderColor: theme.palette.divider,
//   boxShadow: theme.shadows[3],
//   cursor: 'pointer',
//   '&:hover, &:focus-within': {
//     transform: 'translateY(-7px)',
//     boxShadow: theme.shadows[9],
//   }
// }));

// const StyledStackItem = styled('p')(({ theme }: any) => ({
//   display: 'inline',
//   marginRight: 6,
//   marginBottom: -1, 
//   fontWeight: 'bold',
//   color: 'red',
// }));

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }
  .project-top {
    margin-bottom: 35px;
    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);
      a {
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    a {
      position: static;
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .project-description {
    color: var(--light-slate);
    font-size: 17px;
    a {
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

export const ProjectCard = ({type, title, stack, buttons}: Project)  => {

  // const CardButton = ({text, link, variant, icon}: ProjectButton) => {
  //   return (
  //     <Button 
  //       size="small" 
  //       variant={variant}
  //       endIcon={icon && <FontAwesomeIcon icon={icon}/>}
  //       onClick={link ? () => window.open(link, '_blank') : undefined}
  //     >
  //       {text}
  //     </Button>
  //   );
  // };

  // type StackItemProps = {
  //   text: string,
  //   color: string,
  // };

  // const StackItem = ({text, color}: StackItemProps) => (
  //   <StyledStackItem color={color}>{text}</StyledStackItem> 
  // );

  return (
    <StyledProject>test</StyledProject>
  );
}