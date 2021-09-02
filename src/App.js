import React,{useState} from 'react';
import GlobalStyle from './globalStyle';
import { Route, Switch } from 'react-router-dom';
// page
import AboutPage from './pages/aboutpage';
import HomePage from './pages/homepage';


function App() {

  return (
    <>
      <GlobalStyle />
      <HomePage/>
      <AboutPage />
    </>
  );
}

export default App;
