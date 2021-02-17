import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainApp from './MainApp'

function App() {
  
  return( 
  <BrowserRouter>
    <Switch>
      <Route exact path = '/' component={MainApp} />
    </Switch>
  </BrowserRouter>
  )
}

export default App;
