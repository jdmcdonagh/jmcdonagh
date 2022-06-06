import styled from "styled-components";
import { Theme } from '../styles/theme';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const StyledProjectCard = styled('li')(({theme}: {theme: Theme}) => (`
  background: ${theme.palette.primary.light};
  cursor: pointer;
  border-radius: 4px;
  transition: ${theme.transitions.all};

  &:hover,
  &:focus-within {
    transform: translateY(-7px);
    .project-content {
      box-shadow: ${theme.shadow[1]};
    }
    .project-title {
      color: ${theme.palette.other.blue};
    }
  }

  .project-content {
    position: relative;
    display: flex;
    height: 100%;
    padding: 30px;
    justify-content: space-between;
    box-shadow: ${theme.shadow[0]};
    flex-direction: column;
  }

  .project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .project-type {
    margin: 10px 0;
    color: ${theme.palette.text.secondary};
    font-size: ${theme.size.text.md};
    font-weight: 600;
  }

  .project-links {
    display: flex;
    position: relative;
    margin: 5px 0 5px 10px;
    align-items: center;
    color: ${theme.palette.secondary.lighter};
    font-size: ${theme.size.text.md};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }

  .project-title {
    transition: ${theme.transitions.all};
    margin: 0 0 10px;
    font-size: ${theme.size.text.xxl};
  }

  .project-description {
    padding: 20px 0;
    font-size: ${theme.size.text.sm};
    color: ${theme.palette.secondary.light};
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
    color: ${theme.palette.secondary.light};

    li {
      margin: 0 10px 5px 0;
      font-size: ${theme.size.text.xs};
      white-space: nowrap;
    }
  }
`));

export const ProjectCard = ({...props}: any)  => {
  return (
    <StyledProjectCard>
      <div className='project-content' onClick={() => window.open(props.links[1], "_blank")}>
        <header className='project-heading'>
          <div className='project-top'>
            <p className='project-type'>{props.type}</p>
            <div className='project-links'>
              <a href={props.links[0]} target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>
              <a href={props.links[1]} target='_blank' rel='noreferrer'>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <h3 className='project-title'>
            <a href='www.google.com'>
              {props.title}
            </a>
          </h3>
          <div className='project-description'>
            <p>{props.description}</p>
          </div>
        </header>
        <footer>
          <ul className='project-stack'>
            {props.stack &&
              props.stack.map((s: string, i: number) => (
                <li key={i}>{s}</li>
            ))}
          </ul>
        </footer>
      </div>
    </StyledProjectCard>
  );
};