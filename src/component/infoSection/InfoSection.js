import React from 'react'
import styled from 'styled-components/macro';
import { customButtonS } from '../button/button';

const InfoSectionContainer = styled.section`
    padding: 5.6rem 0;
    max-width:1400px;
    width: 100%;
    height:100%;
    @media screen and (max-width:970px){
        width: 90%;
        padding: 2rem 0;
    }
    @media screen and (max-width:550px){
        width: 96%;
        padding: 2rem 0;
        margin: 0 auto;
    }
`;
const InfoSectionWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    padding:3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 5.5rem;
    @media screen and (max-width:1210px){
        width: 96%;
        gap: 1rem;
    }
    @media screen and (max-width:970px){
        grid-template-columns: 1fr;
        grid-template-rows: 2 5rem;
        width: 80%;
        gap: 4rem;
    }
    @media screen and (max-width:970px){
        width: 90%;
        padding: 2rem 0;
    }
    @media screen and (max-width:500px){
        width: 96%;
        padding: 1.5rem 0;
    }

`;
const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    order: ${({ reverse }) => (reverse ? 2 : 1 )}
    h1{
        font-weight:600;
        font-size:40px;
        line-height: 56px;
        font-family: 'Lora', serif;
        margin-bottom: .6rem;
    }
    @media screen and (max-width:970px){
        width: 90%;
    }
    @media screen and (max-width:500px){
        width: 96%;
        h1{
            font-size:30px;
            line-height: 56px;
            margin-bottom: .3rem;
        }
    }
`;
// ---------- paragraphOne
const Pone = styled.p`
    font-size: 1.1rem;
    line-height: 1.7rem;
    font-weight:500;
    margin-bottom:1rem;
    color: #000d1e;
    @media screen and (max-width:500px){
        font-size: 1rem;
        margin-bottom:.5rem;
    }
`;
// ---------- paragraphTwo
const Ptwo = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight:500;
    margin-bottom:1rem;
    color: #5f646b;
    @media screen and (max-width:500px){
        font-size: .87rem;
    }
`;
const ColumnRight = styled.div`
    padding: 1rem;
`;
// -----------------  image
const Image = styled.img`
    width:560px;
    height: 420px;
    object-fit: cover;
    box-shadow: rgba(0, 0,0, 0.7) 0px 7px 29px 0px;
    border-radius:.7rem;
    @media screen and (max-width:1210px){
        width:460px;
        height: 340px;
    }
    @media screen and (max-width:970px){
        width:100%;
        height: 340px;
    }
    @media screen and (max-width:530px){
        width:100%;
        height: 250px;
    }
    @media screen and (max-width:400px){
        width:100%;
        height: 200px;
    }
`;

const InfoSection = ({ heading, imageStart, paragraphOne, paragraphTwo, buttonLabel, image }) => {
    return (
        <InfoSectionContainer id="about">
            <InfoSectionWrapper imageStart={imageStart} >
                <ColumnLeft > 
                    <h1> {heading} </h1>
                    <Pone>{paragraphOne}</Pone>
                    <Ptwo>{paragraphTwo}</Ptwo>
                    <customButtonS
                        to="home"
                        smooth={true}
                        durations={500}
                        say={true}
                        exact="true"
                        offset={-60}

                        css={`
                            margin-top:1rem;
                            width:120px;
                            height:40px;
                            border-radius:1rem;
                            /* padding:1rem 1rem; */
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            
                        `}
                    >{buttonLabel}</customButtonS>
                </ColumnLeft>
                <ColumnRight >    
                        <Image src={image} alt="charity" />
                </ColumnRight>
            </InfoSectionWrapper>
        </InfoSectionContainer>
    )
}

export default InfoSection;
