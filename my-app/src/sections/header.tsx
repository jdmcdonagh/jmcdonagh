import { useEffect, useRef }from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Theme } from '../styles/theme';
import { srConfig } from '../config';
import sr from '../utils/sr';

const NavBar = styled('nav')(({theme}: {theme: Theme}) => (`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.5px solid ${theme.palette.seperator};

  ${theme.media.mobile} {
    display: block;
  };
`));

const Logo = styled('div')(({theme}: {theme: Theme}) => (`
  h1 {
    margin: 0;
    padding: 14px 0;
    color: ${theme.palette.text.secondary};
    transition: ${theme.transitions.all};
    cursor: pointer;

    &:hover {
      color: ${theme.palette.other.blue};
    };
  };

  ${theme.media.mobile} {
    font-size: 30;
    text-align: center;
  };
`));

const List = styled('ul')(({theme}: {theme: Theme}) => (`
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${theme.media.mobile} {
    padding: 4px 0 8px 0;
    text-align: center;
    display: flex;
    justify-content: center;
  };
`));

const Links = styled('div')(({theme}: {theme: Theme}) => (`
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;

  svg {
    color: ${theme.palette.text.secondary};
    font-size: ${theme.size.text.lg};
    transition: ${theme.transitions.all};
    &:hover {
      color: ${theme.palette.other.blue};
    };
  };
`));

export default function Header() {

  const revealLogo = useRef<any>(null);
  const revealIcons = useRef<any>([]);

  useEffect(() => {
    sr!.reveal(revealLogo.current, srConfig({origin: 'top'}));
    revealIcons.current.forEach((ref: any, i: number) => 
      sr!.reveal(ref, srConfig({origin: 'top', delay: i * 100 + 300}))
    );
  }, []);

  const user1 = 'jmcdonagh';
  const user2 = 'jdmcdonagh';
  const ghLink = `https://github.com/${user2}`;
  const liLink = `https://www.linkedin.com/in/${user2}`;
  const emLink = `mailto:me@${user1}.com`;
  const cvLink = `/cv`;

  const links = [
    {
      icon: <FaGithub />,
      link: ghLink,
    },
    {
      icon: <FaLinkedinIn />,
      link: liLink,
    },
    {
      icon: <FaEnvelope />,
      link: emLink,
    },
    {
      icon: <FaFileAlt />,
      link: liLink,
    },
  ];

  return (
    <NavBar>
      <Logo ref={revealLogo}>
        <h1>James McDonagh</h1>
      </Logo>
      <List>
        {links &&
          links.map((l: any, i: number) => (
            <Links key={i} ref={el => revealIcons.current[i] = el}>
              <a href={l.link} target='_blank' rel='noreferrer'>
               {l.icon}
              </a>
            </Links>
        ))}
      </List>
    </NavBar>
  );
}
