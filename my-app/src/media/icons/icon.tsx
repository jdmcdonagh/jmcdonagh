import React from 'react';
import IconGitHub from './github';
import IconLinkedIn from './linkedin';
import IconEmail from './email';
import IconCV from './cv';

const Icon = ({ name }: {name: string}) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Email':
      return <IconEmail />;
    case 'CV':
      return <IconCV />;
    default:
      return <IconGitHub />;
  }
};

export default Icon;