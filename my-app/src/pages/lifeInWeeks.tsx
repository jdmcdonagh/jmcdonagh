import { useEffect, useRef } from 'react';
import { ProjectCard } from '../components/projectCard';
import { Section } from '../components/section';
import { projectData } from '../data/projects';
import { srConfig, PROJECT_DEFAULT_DISPLAY } from '../config';
import { Theme } from '../styles/theme';
import styled from 'styled-components';
import sr from '../utils/sr';

import { getWeeks } from '../data/lifeInWeeks';

const YEARS = 80;
const WEEKS = 52;
const W_LABEL_INTERVAL = 4;

const GRID_SIZE = '1vw';

const LifeGrid = styled('ol')(({theme}: {theme: Theme}) => (`
  position: relative;
  display: grid;
  justify-content: center;
  margin: 4rem auto 2rem;
  padding: 0;
  grid-template-columns: repeat(53, ${GRID_SIZE});
  grid-gap: 0.25vw;
  list-style-type: none;
`));

const Week = styled('li')(({theme, color}: {theme: Theme, color: string}) => (`
  background: ${color ? color : '#152c45'};
  width: ${GRID_SIZE};
  height: ${GRID_SIZE};
`));

const WeekLabel = styled('li')(({theme}: {theme: Theme}) => (`
  width: ${GRID_SIZE};
  height: ${GRID_SIZE};
  font-size: 0.8vw;
  text-align: center;
  `));
  
const YearLabel = styled('li')(({theme}: {theme: Theme}) => (`
  width: ${GRID_SIZE};
  height: ${GRID_SIZE};
  font-size: 0.8vw;
  text-align: end;
  padding-right: 2px;
`));

export const LifeInWeeks = () => {
  return (
    <Section title="My Life in Weeks">
      <LifeGrid>
        {[...Array(WEEKS+1)].map((e, i) => (
          <WeekLabel key={i}>
            {((i) % W_LABEL_INTERVAL === 0 || i === 1) && i !== 0
              ? i 
              : null}
          </WeekLabel>
        ))}
        {getWeeks(YEARS).map((c: any, i: number) => (
          (i) % (WEEKS+1) === 0
            ? <YearLabel>
                {Math.round((i+1)/(WEEKS+1)+1)}
              </YearLabel>
            : <Week key={i} color={c} />
        ))}
      </LifeGrid>
    </Section>
  );
}
