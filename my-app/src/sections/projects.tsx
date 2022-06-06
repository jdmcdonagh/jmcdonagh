import { useEffect, useRef } from 'react';
import { ProjectCard } from '../components/projectCard';
import { Section } from '../components/section';
import { projectData } from '../data/projects';
import { srConfig, PROJECT_DEFAULT_DISPLAY } from '../config';
import { Theme } from '../styles/theme';
import styled from 'styled-components';
import sr from '../utils/sr';


const StyledProjectsSection = styled('section')(({theme}: {theme: Theme}) => (`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 195px);

  .project-grid {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
  }
`));

export default function Projects() {

  const revealProjects = useRef<any[]>([]);

  useEffect(() => {
    revealProjects.current.forEach((ref, i) => 
      sr!.reveal(ref, srConfig({delay: i * 100 + 800}))
    );
  }, []);

  const displayedProjects = projectData.slice(0, PROJECT_DEFAULT_DISPLAY);

  return (
    <StyledProjectsSection>
      <Section title="Projects">
        <ul className="project-grid">
          {displayedProjects &&
            displayedProjects.map((p, i) => (
              <div
                style={{display: 'grid'}} 
                key={i}
                ref={(el: any) => (revealProjects.current[i] = el)}>
                <ProjectCard
                  type={p.type}
                  title={p.title}
                  description={p.description}
                  stack={p.stack}
                  github={p.github}
                  external={p.external}
                />
              </div>
            ))}
        </ul>
      </Section>
    </StyledProjectsSection>
  );
}
