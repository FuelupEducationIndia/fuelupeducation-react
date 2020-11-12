import React from 'react'
import './LandingPage.module.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Sign_in from './Sign'


function App() {
  return (
    <div className="front-page">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/Sign_in" component={Sign_in} />
        </Switch>
      </BrowserRouter>


    </div>


  );
}

export default App;
