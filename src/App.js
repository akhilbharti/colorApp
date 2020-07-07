import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './components/palette'
import PaletteList from './components/paletteList'
import { generatePalette } from './helper/colorHelper'
import seedColor from './seedColor';

function App() {

  const findPaletteId=(id)=>{
     return seedColor.find(palette=>{
        return palette.id===id
      })
  }
  return (
        <Switch>
          <Route exact path="/" render={(routeProps)=><PaletteList palettes={seedColor} {...routeProps}/>}></Route>
        <Route exact path="/palette/:id" render={(routeProps)=> <Palette palette={generatePalette(findPaletteId(routeProps.match.params.id))}/>}></Route>
        </Switch>

    // <div className="App">
    //   <Palette palette = {generatePalette(seedColor[4])}/>
    // </div>
  );
}

export default App;
