import React from 'react'
import styled from 'styled-components'
// react-icon
import { VscSmiley } from 'react-icons/vsc';
import {FaHeartbeat} from 'react-icons/fa'
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa'




const ShowcaseWrapper = styled.div`
    padding: 30px 0px;
    width: 90%;
    margin: 0px auto;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    align-items: center;
    gap: 16px;
    /* responsive */
    @media (max-width:1200px){
        grid-template-columns:1fr 1fr 1fr;
    }
    @media (max-width:890px){
        grid-template-columns:1fr 1fr;
    }
    @media (max-width:605px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        flex-direction: column;
    }
`
// showcase

const ShowCase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1rem;
    width : 265px;
    height:165px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: all 0.1s ease-in-out;
    &:hover{
        border: 1px solid  #83BA09;
    }

`;


// style-Icons

const Smile = styled(VscSmiley)`
    color: #83BA09;
    font-size: 3rem;
    margin-bottom: .8rem;
`;

const Heart = styled(FaHeartbeat)`
    color: #83BA09;
    font-size: 3rem;
    margin-bottom: .8rem;
`;

const Money = styled(FaMoneyBillAlt)`
    color: #83BA09;
    font-size: 3rem;
    margin-bottom: .8rem;
`;

const Hand = styled(FaHandshake)`
    color: #83BA09;
    font-size: 3rem;
    margin-bottom: .8rem;
`;


const H2 = styled.h2`
    padding: 0 15px;
    
`;

const P = styled.p`
    margin-top: .5rem;
    color: #83BA09;
    font-size: .9rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    @media (max-width:768px){
        font-size:.8rem
    }
`



const Showcase = () => {
    return (
        <>
            <ShowcaseWrapper>
                <ShowCase>
                    <Smile />
                    <H2>200</H2>
                    <P>Donors</P>
                </ShowCase>
                <ShowCase>
                    <Heart />
                    <H2>2K</H2>
                    <P>Children Saved</P>
                </ShowCase>
                <ShowCase>
                    <Money />
                    <H2>12K</H2>
                    <P>Donated</P>
                </ShowCase>
                <ShowCase>
                    <Hand />
                    <H2>340</H2>
                    <P>Volunteers</P>
                </ShowCase>
            </ShowcaseWrapper>
        </>
    )
}

export default Showcase;
