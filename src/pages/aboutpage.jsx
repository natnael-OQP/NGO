import React from 'react'
import InfoSection from '../component/infoSection/InfoSection';
import { InfoData } from '../data/InfoData';
const AboutPage = () => {
    return (
        <>
            <InfoSection {...InfoData} />
        </>
    )
}

export default AboutPage;
