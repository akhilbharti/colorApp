import React from 'react';
// import './App.css';
import Palette from './components/palette'
import SeedColor from './seedColor'

function App() {
  return (
    <div className="App">
      <Palette {...SeedColor[4]}/>
    </div>
  );
}

export default App;
