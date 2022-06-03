import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Node, bfs, getLinks } from '../utilities/wikiConnect'

const axios = require('axios').default;

function WikiConnect() {

  // Starting page
  const [startValue, setStartValue] = useState<string|null>(null);
  const [startInputValue, setStartInputValue] = useState('');
  const [startOptions, setStartOptions] = useState<string[]>([]);
  
  // Destination page
  const [finalInputValue, setFinalInputValue] = useState('');
  const [finalValue, setFinalValue] = useState<string|null>(null);
  const [finalOptions, setFinalOptions] = useState<string[]>([]);

  // Run button
  const [running, setRunning] = useState(false);
  const [ready, setReady] = useState(false);

  // Ready to run validation
  useEffect(() => {
    if (startValue && finalValue) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [startValue, finalValue]);

  // Run function
  function handleClick() {
    setRunning(true);
    console.log(startValue);
    console.log(finalValue);
    if (startValue && finalValue) {
      const start = new Node(startValue);
      const dest = new Node(finalValue);
      const result = bfs(start, dest);
    }

    setRunning(false);
  }

  // Fetch wikipedia articles that match search term
  useEffect(() => {
    axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${startInputValue}&limit=5&namespace=0&origin=*&format=json`)
    .then((r: { [key: string]: any[] }) => {
      const list = r['data'][1];
      list !== undefined ? setStartOptions(list) : setStartOptions([]);
    })
  }, [startInputValue]);

  useEffect(() => {
    axios.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${finalInputValue}&limit=5&namespace=0&origin=*&format=json`)
    .then((r: { [key: string]: any[] }) => {
      const list = r['data'][1];
      list !== undefined ? setFinalOptions(list) : setFinalOptions([]);
    })
  }, [finalInputValue]);

  return (
    <React.Fragment>
      <Autocomplete
        sx={{
          padding: 3,
        }}
        value={startValue}
        onChange={(e: any, newValue: string | null) => {setStartValue(newValue)}}
        inputValue={startInputValue}
        onInputChange={(e, newInputValue) => {setStartInputValue(newInputValue)}}
        options={startOptions}
        renderInput={(params) => <TextField {...params} label="Starting Page" />}
        filterOptions={(x) => x}
      />
      <Autocomplete
        sx={{
          padding: 3,
          paddingTop: 0,
        }}
        value={finalValue}
        onChange={(e: any, newValue: string | null) => {setFinalValue(newValue)}}
        inputValue={finalInputValue}
        onInputChange={(e, newInputValue) => {setFinalInputValue(newInputValue)}}
        options={finalOptions}
        renderInput={(params) => <TextField {...params} label="Destination Page" />}
        filterOptions={(x) => x}
      />
      <LoadingButton
        sx={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '5px 45px 5px 45px',
        }}
        onClick={handleClick}
        loading={running}
        variant="outlined"
        disabled={!ready}
      >Run</LoadingButton>
    </React.Fragment>
  );
}

export default WikiConnect;
