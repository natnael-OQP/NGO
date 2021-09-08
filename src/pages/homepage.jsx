import React from 'react'
import Banner from '../component/banner(landing page)/Banner';
import { SliderData } from '../data/SliderData';
import Navbar from '../component/navBar/Navbar';
// about section
import InfoSection from '../component/infoSection/InfoSection';
import { InfoData } from '../data/InfoData';
// causes section
import CausesComponent from '../component/cause/causes';
// -- ShowCase
import Showcase from '../component/showcase/showcase'; 
// footer
import Footer from '../component/footer/Footer';


const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner slides={SliderData} />
            <InfoSection {...InfoData} />
            <Showcase/>
            <CausesComponent />
            <Footer/>
        </>
    )
}

export default HomePage;
