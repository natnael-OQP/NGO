import React,{useState} from 'react'
import Banner from './component/banner(landing page)/Banner';
import Header from './component/header/header'
import GlobalStyle from './globalStyle';
// import {Route,Switch} from 'react-router-dom';
import { SliderData } from './data/SliderData'
import Dropdown from './component/Dropdown/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle/>
      <Banner slides={SliderData} />
      <Header toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen} />
    </>
  );
}

export default App;
