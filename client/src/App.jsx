import React, { useState, useMemo } from 'react';
import './App.css';
import { useRoutes } from "react-router-dom";
import { routes } from './components/Router/routes';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [mode, setMode] = useState('light');
  const element = useRoutes(routes(mode));

  return (
    <div className= {`banner ${mode}`}>
      <div className= {`container ${mode}`}>
        <NavBar mode={mode} setMode={setMode}></NavBar>
        <div className='card'>{element}</div>
      </div>
    </div>
  );
}

export default App;
