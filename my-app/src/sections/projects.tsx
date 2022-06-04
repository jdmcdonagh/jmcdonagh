import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box } from '@mui/material';
import { ProjectCard } from '../components/projectCard';
import { Section } from '../components/section';
import { projectData } from '../data/projects';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { styled } from "@mui/system";
import sr from '../utils/sr';
import cfg from '../config';

export default function Projects() {

  const revealTitle = useRef<any>(null);
  const revealProjects = useRef<any[]>([]);

  useEffect(() => {
    sr!.reveal(revealTitle.current, cfg.sr());
    revealProjects.current.forEach((ref, i) => 
      sr!.reveal(ref, cfg.sr(i * 100))
    );
  }, []);

  const displayedProjects = projectData.slice(0, cfg.PROJECT_DEFAULT_DISPLAY);

  // return (
  //   <Section title="What I've Done">
  //     <h1 ref={revealTitle} style={{color: 'white'}}>test</h1>
  //     <Box sx={{ flexGrow: 1 }}>
  //       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
  //         <TransitionGroup component={null}>
  //           {displayedProjects &&
  //             displayedProjects.map((p, i) => (
  //               <CSSTransition
  //                 key={i}
  //                 classNames="fadeup"
  //                 timeout={i >= cfg.PROJECT_DEFAULT_DISPLAY ? (i - cfg.PROJECT_DEFAULT_DISPLAY) * 300 : 300}
  //                 exit={false}>
  //                 <div 
  //                   key={i}
  //                   ref={el => (revealProjects.current[i] = el)}
  //                   style={{
  //                     transitionDelay: `${i >= cfg.PROJECT_DEFAULT_DISPLAY ? (i - cfg.PROJECT_DEFAULT_DISPLAY) * 100 : 0}ms`,
  //                     color: 'white',
  //                   }}>Test Item</div>
  //               </CSSTransition>
  //             ))}
  //         </TransitionGroup>
  //       </Grid>
  //     </Box>
  //   </Section>
  // );

  return (
    <Section title="What I've Done">
      <h1 ref={revealTitle} style={{color: 'white'}}>test</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
          {displayedProjects.map((p, i) => 
            <Grid item xs={2} sm={4} md={4} key={i}>
              <ProjectCard 
                type={p.type}
                title={p.title}
                stack={p.stack}
                buttons={p.buttons}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Section>
  );

}