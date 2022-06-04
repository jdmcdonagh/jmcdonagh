import { useEffect, useRef }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
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

const Logo = styled('h1')(({theme}: {theme: Theme}) => (`
  margin: 0;
  padding: 14px 0;
  color: ${theme.palette.text.secondary};
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
      icon: faGithub,
      link: ghLink,
    },
    {
      icon: faLinkedinIn,
      link: liLink,
    },
    {
      icon: faEnvelope,
      link: emLink,
    },
    {
      icon: faFileAlt,
      link: cvLink,
    },
  ];

  return (
    <NavBar>
      <Logo ref={revealLogo}>James McDonagh</Logo>
      <List>
        {links &&
          links.map((l: any, i: number) => (
            <Links ref={el => revealIcons.current[i] = el}>
              <a href={l.link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={l.icon}/>
              </a>
            </Links>
        ))}
      </List>
    </NavBar>
  );
}
