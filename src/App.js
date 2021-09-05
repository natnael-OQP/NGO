import React,{useState} from 'react';
import GlobalStyle from './globalStyle';
import { Route, Switch } from 'react-router-dom';
// page
import HomePage from './pages/homepage';


function App() {

  return (
    <>
      <GlobalStyle />
      <HomePage/>
    </>
  );
}

export default App;
