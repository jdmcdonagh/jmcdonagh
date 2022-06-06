import { useState, useMemo, useContext, createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage } from './pages/homepage';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/globalStyle';

const ThemeModeContext = createContext({ toggleMode: () => {} });
export const ThemeToggle = () => {
  const themeMode = useContext(ThemeModeContext);
  return (
    <button onClick={themeMode.toggleMode}>
      Toggle Colour
    </button>
  );
}

export default function App() {

  const [mode, setMode] = useState<'light'|'dark'>('dark');
  const theme = useMemo(() => mode === 'dark' ? darkTheme : lightTheme, [mode]);
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
