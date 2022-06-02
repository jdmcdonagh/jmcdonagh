import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WikiConnect from './pages/wikiConnect';
import Homepage from './pages/homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Homepage />}/>
        <Route path="/projects/wiki" element={<WikiConnect />} />
      </Routes>
    </Router>
  );
}

export default App;
