import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@mui/material';
// import { styled } from "@mui/system";
import styled from 'styled-components';


const NavBar = styled('nav')(({ theme }) => ({
  background: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderBottom: '0.5px solid #fff',
  // borderColor: theme.palette.divider,
  borderColor: 'red',
  '@media (max-width: 768px)': {
    display: 'block'
  }
}));

const Logo = styled('h1')(({ theme }) => ({
  margin: 0,
  padding: '14px 0',
  color: 'red',
  // color: theme.palette.text.secondary,
  '@media (max-width: 768px)': {
    fontSize: 30,
    textAlign: 'center',
  }
}));

const List = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  '@media (max-width: 768px)': {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '4px 0 8px 0',
  }
}));

const Links = styled('a')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: 20,
  marginRight: 20,
  cursor: 'pointer',
  'button > svg': {
    // color: theme.palette.text.secondary,
  }
}));

export default function Header() {

  const user1 = 'jmcdonagh';
  const user2 = 'jdmcdonagh';
  const ghLink = `https://github.com/${user2}`;
  const liLink = `https://www.linkedin.com/in/${user2}`;
  const emLink = `mailto:me@${user1}.com`;
  const cvLink = `/cv`;

  type IconProps = {
    icon: IconDefinition,
    desc: string,
    link: string,
  }

  const IconLink = ({icon, desc, link}: IconProps) => {
    return (
      <Links>
        <IconButton aria-label={desc} size='small' onClick={() => window.open(link, '_blank')}>
          <FontAwesomeIcon icon={icon}/>
        </IconButton>
      </Links>
  )};

  return (
    <NavBar>
      <Logo>
        James McDonagh
      </Logo>
      <List>
        <IconLink icon={faGithub}     desc="GitHub"   link={ghLink} />
        <IconLink icon={faLinkedinIn} desc="LinkedIn" link={liLink} />
        <IconLink icon={faEnvelope}   desc="Email"    link={emLink} />
        <IconLink icon={faFileAlt}    desc="CV"       link={cvLink}/>
      </List>
    </NavBar>
  );
}
