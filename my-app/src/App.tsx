import React, { useState, useMemo, createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import WikiConnect from './pages/wikiConnect';
import { Homepage } from './pages/homepage';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { PaletteMode } from '@mui/material';
import { customTheme } from './styles/palette';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ThemeToggle = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default function App() {

  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
  }),[],);

  const theme = React.useMemo(() => createTheme(customTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Homepage />}/>
            <Route path="/projects/wiki" element={<WikiConnect />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
