import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './components/palette'
import { generatePalette } from './helper/colorHelper'
import seedColor from './seedColor';

function App() {

  return (
        <Switch>
          <Route exact path="/"></Route>
        <Route exact path="/palette/:id"></Route>

        </Switch>

    <div className="App">
      <Palette palette = {generatePalette(seedColor[4])}/>
    </div>
  );
}

export default App;
