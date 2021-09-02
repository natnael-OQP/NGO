import React from 'react'
import Banner from '../component/banner(landing page)/Banner';
import { SliderData } from '../data/SliderData';
import Navbar from '../component/navBar/Navbar';
const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner slides={SliderData} />
        </>
    )
}

export default HomePage;
