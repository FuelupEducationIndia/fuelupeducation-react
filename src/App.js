import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './Routes';
import classes from "./App.module.css";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  let currentUrl = "";
  const setPathname = (pathname) => {
    currentUrl = pathname;
  };

  return (
    <div className={currentUrl === '/' ? classes.backgroundImage : ''}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Routes setPathname={setPathname} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
