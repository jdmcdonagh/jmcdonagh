import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

export const Section = ({...props}) => {

  const Title = styled('h1')(({ theme }) => ({
    margin: '20px 0 14px 0',
    textAlign: 'center',
  }));

  const Seperator = styled('hr')(({ theme }) => ({
    marginTop: 20,
    marginBottom: 0,
    border: 0,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  }));

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      {props.children}
      <Seperator />
    </React.Fragment>
  );
}
