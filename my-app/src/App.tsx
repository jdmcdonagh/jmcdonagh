import React, { useState, useMemo, createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage } from './pages/homepage';
import { ThemeProvider, useTheme } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

const ThemeModeContext = createContext({ toggleMode: () => {} });


export const ThemeToggle = () => {
  const theme = useTheme();
  const themeMode = React.useContext(ThemeModeContext);
  return (
    <button onClick={themeMode.toggleMode}>
      Toggle Colour
    </button>
  );
}


export default function App() {

  const [mode, setMode] = useState<'light'|'dark'>('dark');
  const theme = React.useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode]);
  const colorMode = useMemo(() => ({
    toggleMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }),[],);

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Homepage />}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
