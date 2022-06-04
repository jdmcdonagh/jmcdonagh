import { faGithub } from '@fortawesome/free-brands-svg-icons'

export type ProjectButton = {
  text: string,
  link: string,
  variant: any,
  icon?: any,
}

export type ProjectStackItem = {
  text: string,
  color: string,
}

export type Project = {
    type: string,
    title: string,
    stack: ProjectStackItem[],
    buttons: ProjectButton[],
}

export const projectData: Project[] = [
  {
    type: 'Journal Article',
    title: 'Electromagnetic Simulations',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'LongNameTesteradasd',
      color: 'blue',
    },
    {
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'Read Article',
      link: 'https://doi.org/10.1016/j.finel.2022.103755',
      variant: 'contained',
    }],
  },
  {
    type: 'Volunteering',
    title: '3D-Printed Prostheses',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'Learn More',
      link: 'https://enablingthefuture.org/',
      variant: 'contained',
    }],
  },
  {
    type: 'Personal Project',
    title: 'Code',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'View Demo',
      link: 'https://github.com/jdmcdonagh',
      variant: 'contained',
    }],
  },
  {
    type: 'Personal Project',
    title: 'Code',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'View Demo',
      link: 'https://github.com/jdmcdonagh',
      variant: 'contained',
    }],
  },
  {
    type: 'Personal Project',
    title: 'Code',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'View Demo',
      link: 'https://github.com/jdmcdonagh',
      variant: 'contained',
    }],
  },
  {
    type: 'Personal Project',
    title: 'Code',
    stack: [{
      text: 'Py3',
      color: 'blue',
    },
    {
      text: 'FEniCSx',
      color: 'yellow',
    }],
    buttons: [{
      text: 'GitHub',
      link: 'https://github.com/jdmcdonagh',
      variant: 'outlined',
      icon: faGithub,
    },
    {
      text: 'View Demo',
      link: 'https://github.com/jdmcdonagh',
      variant: 'contained',
    }],
  },
];