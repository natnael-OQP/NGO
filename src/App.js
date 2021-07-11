import React from 'react'
import Banner from './component/banner(landing page)/Banner';
import Header from './component/header/header'
import GlobalStyle from './globalStyle';
// import {Route,Switch} from 'react-router-dom';
import {SliderData} from './data/SliderData'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Banner slides={SliderData} />
      <Header />
    </>
  );
}

export default App;
