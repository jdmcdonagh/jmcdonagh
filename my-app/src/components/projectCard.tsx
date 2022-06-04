import React, { useState, useEffect, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, CardContent, CardActions, Typography } from '@mui/material';
import { Project, ProjectButton } from '../data/projects';
import styled from "styled-components";
import { Theme } from '../styles/theme';


const StyledProjectCard = styled('li')(({theme}: {theme: Theme}) => (`
  position: relative;
  display: grid;
  background: ${theme.palette.primary.light};
  cursor: pointer;
  transition: all ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.inOut};
  border-radius: 4px;

  &:hover,
  &:focus-within {
    transform: translateY(-7px);
    .project-content {
      box-shadow: ${theme.shadow[1]};
    }
    .project-title {
      color: ${theme.palette.text.secondary};
    }
  }

  .project-content {
    padding: 30px;
    display: flex
    justify-content: space-between;
    box-shadow: ${theme.shadow[0]};
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
  }

  .project-type {
    margin: 10px 0;
    color: ${theme.palette.text.secondary};
    font-size: ${theme.size.text.sm};
  }
  
  .project-title {
    margin: 0 0 10px;
    font-size: ${theme.size.text.xxl};
  }
  
  .project-description {
    padding: 20px 0;
    font-size: ${theme.size.text.md};
    p {
      margin: 0;
    }
  }

  .project-stack {
    margin: 10px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    list-style: none;

    li {
      margin: 0 10px 5px 0;
      font-size: ${theme.size.text.xs};
      white-space: nowrap;
    }
  }

  .project-links {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${theme.palette.secondary.lighter};

    a {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      padding: 10px;
    }
  }

`));


export const ProjectCard = ({...props}: any)  => {
  return (
    <StyledProjectCard>
      <div className='project-content'>
        <div className='project-heading'>
          <p className='project-type'>{props.type}</p>
          <h3 className='project-title'>
            <a href='#'>
              {props.title}
            </a>
          </h3>
        </div>
        <div className='project-mid'>
          <div className='project-description'>
            <p>A web app for visualizing personalized Spotify data. View your top artists, top and detailed audio information about each track.</p>
          </div>
          <ul className='project-stack'>
            {props.stack &&
              props.stack.map((s: any, i: number) => (
                <li key={i}>{s.text}</li>
            ))}
          </ul>
          <div className='project-links'>
            <a>
              Link
            </a>
            <a>
              Link
            </a>
          </div>
        </div>
      </div>
    </StyledProjectCard>
  );

  // return (
  //   <StyledProjectCard {...props}>
  //     <div className="project-inner">
  //       <header>
  //         <div className="project-top">
  //           <div className="folder">
  //             <p>fol</p>
  //           </div>
  //           <div className="project-links">
  //             <a aria-label="GitHub Link" target="_blank" rel="noreferrer">
  //               <p>gh</p>
  //             </a>
  //             <a
  //               aria-label="External Link"
  //               className="external"
  //               target="_blank"
  //               rel="noreferrer">
  //               <p>ex</p>
  //             </a>
  //           </div>
  //         </div>

  //         <h3 className="project-title">
  //           <a target="_blank" rel="noreferrer">
  //             {props.title}
  //           </a>
  //         </h3>

  //       </header>

  //       <footer>
  //         {props.stack && (
  //           <ul className="project-tech-list">
  //             {props.stack.map((t: any, i: number) => (
  //               <li key={i}>test</li>
  //             ))}
  //           </ul>
  //         )}
  //       </footer>
  //     </div>
  //   </StyledProjectCard>
  // );
};