import { Section } from '../components/section';
import { lifeData } from '../data/lifeInWeeks';
import { Theme } from '../styles/theme';
import styled from 'styled-components';

const YEARS = Math.ceil(Math.abs(lifeData.at(-1)!.date.getTime() - lifeData[0].date.getTime()) / (1000*60*60*24*7*52));
const WEEKS = 52;
const W_LABEL_INTERVAL = 4;
const GRID_SIZE = '1vw';


const Legend = styled('ul')(({theme}: {theme: Theme}) => (`
  display: table;
  margin: 4rem auto 2rem;
`));
  
const LegendBox = styled('li')(({theme, color}: {theme: Theme, color: string}) => (`
  display: table-cell;
  background: ${color};
  width: ${GRID_SIZE};
  height: ${GRID_SIZE};
`));
  
const LegendTitle = styled('li')(({theme}: {theme: Theme}) => (`
  display: table-cell;
  height: ${GRID_SIZE};
  font-size: 0.8vw;
  justify-content: center;
  padding: 0 8px 0 6px;
`));

const LifeGrid = styled('ul')(({theme}: {theme: Theme}) => (`
  position: relative;
  display: grid;
  justify-content: center;
  margin-bottom: 2rem;
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

  function getWeeks(data: any[], totalYears=80) {
    let output: string[] = [];
    for (let i=1; i<data.length ; ++i) {
      const ws = getWeeksDiff(data[i-1]['date'], data[i]['date']);
      const arr = new Array(ws); for (let j=0; j<ws; ++j) arr[j] = data[i]['color'];
      output = output.concat(arr);
    }
    // ensure the array is at least totalYears long
    while (output.length < totalYears * 52) {
      output.push('');
    }
    output = adjustForLabels(output);
    return output;
  }
  
  function getWeeksDiff(startDate: any, endDate: any) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7.023076923;
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
  }
  
  // Shift arrays to account for y-axis labels
  function adjustForLabels(arr: any[], pos=0, interval=53) {
    while (pos < arr.length) {
      arr.splice(pos, 0, '');
      pos += interval;
    }
    return arr;
  }

  return (
    <Section title="My Life in Weeks">
      <Legend>
        {lifeData.slice(1).map((l, i) => (
          <>
            <LegendBox color={l.color} key={`${i}-box`} />
            <LegendTitle key={`${i}-title`}>{l.title}</LegendTitle>
          </>
        ))}
      </Legend>
      <LifeGrid>
        {[...Array(WEEKS+1)].map((e, i) => (
          <WeekLabel key={i}>
            {((i) % W_LABEL_INTERVAL === 0 || i === 1) && i !== 0
              ? i 
              : null}
          </WeekLabel>
        ))}
        {getWeeks(lifeData, YEARS).map((c: any, i: number) => (
          (i) % (WEEKS+1) === 0
            ? <YearLabel key={i} >
                {Math.round((i+1)/(WEEKS+1)+1)}
              </YearLabel>
            : <Week key={i} color={c} />
        ))}
      </LifeGrid>
    </Section>
  );
}
