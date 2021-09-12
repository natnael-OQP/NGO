import React from 'react';
import GlobalStyle from './globalStyle';
import { Route, Switch } from 'react-router-dom';
// page
import HomePage from './pages/homepage';
import Donate from './component/Donate/Donate';
  
function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donate" component={Donate}/>
      </Switch>
      <GlobalStyle />
    </>
  );
}

export default App;
