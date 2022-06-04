import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { styled } from "@mui/system";


export const Section = ({...props}) => {

  const Title = styled('h1')(({ theme }) => ({
    margin: '20px 0 14px 0',
    textAlign: 'center',
    // color: theme.palette.text.primary,
  }));

  const Seperator = styled('hr')(({ theme }) => ({
    marginTop: 20,
    marginBottom: 0,
    border: 0,
    height: 0,
    borderBottom: '1px solid #fff',
    // borderColor: theme.palette.divider,
  }));

  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      {props.children}
      <Seperator />
    </React.Fragment>
  );
}
