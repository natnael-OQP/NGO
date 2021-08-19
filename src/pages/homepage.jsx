import React from 'react'
import Banner from '../component/banner(landing page)/Banner';
import { SliderData } from '../data/SliderData';
const HomePage = () => {
    return (
        <>
            <Banner slides={SliderData} />
        </>
    )
}

export default HomePage;
