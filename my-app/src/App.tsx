import { useMemo, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Autocomplete, TextField, Button, useMediaQuery, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WikiConnect from './pages/wikiConnect';
import Homepage from './pages/homepage';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log(prefersDarkMode)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light',
          // mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: '0 auto',
          // maxWidth: 740,
          padding: '0 10px',
          // width: '100%',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Homepage />}/>
            <Route path="/projects/wiki" element={<WikiConnect />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
