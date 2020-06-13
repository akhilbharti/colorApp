import React from 'react';
import './App.css';
import Palette from './components/palette'
import { generatePalette } from './helper/colorHelper'
import seedColor from './seedColor';

function App() {

  return (
    <div className="App">
      <Palette palette = {generatePalette(seedColor[4])}/>
    </div>
  );
}

export default App;
