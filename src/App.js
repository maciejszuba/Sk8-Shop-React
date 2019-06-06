import React from 'react';
import './css/style.css';
import MainMenu from './components/MainMenu';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <React.Fragment>
      <Navbar/>
      <MainMenu/>
    </React.Fragment>
  )
}

export default App;
