import React from 'react'
import Banner from '../component/banner(landing page)/Banner';
import { SliderData } from '../data/SliderData';
import Navbar from '../component/navBar/Navbar';
// about section
import InfoSection from '../component/infoSection/InfoSection';
import { InfoData } from '../data/InfoData';
// causes section
import CausesComponent from '../component/cause/causes';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner slides={SliderData} />
            <InfoSection {...InfoData} />
            <CausesComponent/>
        </>
    )
}

export default HomePage;
