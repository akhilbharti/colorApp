import React from 'react';
import './App.css';
import Palette from './components/palette'
import SeedColor from './seedColor'
import { generatePalette } from './helper/colorHelper'
import seedColor from './seedColor';

function App() {

  console.log('%c⧭', 'color: #00e600', generatePalette(seedColor[4]));
  return (
    <div className="App">
      <Palette {...SeedColor[4]}/>
    </div>
  );
}

export default App;
