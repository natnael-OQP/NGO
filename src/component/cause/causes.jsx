import React from 'react'
import styled,{css} from 'styled-components/macro';
import ImageOne from '../../image/Image3.jpg'
import ImageTwo from '../../image/Image7.jpg'
import ImageThree from '../../image/Image6.jpg';

const CauseSection = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #FCF8F9;
    padding-bottom: 4rem;
    @media (max-width: 768px) {
        /* height: 1100px; */
    }
    @media (max-width: 480px) {
        /* height: 1300px; */
    }
`

const CauseHeading = styled.h1`
    margin-bottom: 6rem;
    font-size:40px;
    line-height:56px;
    font-family: 'Lora', serif;
    color: #1A1C2C;
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const CausesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap: 16px;
    
    @media (max-width: 1000px) {
        grid-template-columns: 1fr  1fr;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0px 20px;
    }
`

const CauseCard = styled.div`
    background-color: #fff;
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content:flex-start;
    border-radius: 10px;
    height:350px;
    width: 300px;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    margin-bottom: auto;
    &:hover{
        transform: scale(1.02);
        transition: all 0.3s ease;
    }
`
const ImageContainer = styled.div`
    width: 300px;
    height: 200px;
    margin-bottom: 10px;
`
const CartImage = styled.img`
    width: 100%;
    height:100%;
    border-radius: 3%;
    object-fit: cover;
`

const CartH2 = styled.h2`
    padding: 0 30px;
    font-size: 1rem;
    margin-bottom: 10px;
    border-radius: 10px;
    font-family:'Lora' serif;
    @media (max-width:768px){
        font-size:.8rem
    }
`

const CartP = styled.p`
    font-size: 1rem;
    padding:0  30px;
    text-align: center;
`


const CausesComponent = () => {
    return (
        <CauseSection id="causes">
            <CauseHeading> Causes we are serving </CauseHeading>
            {
                // Causes Wrapper
            }
            <CausesWrapper>
                {
                    //   card-One
                }
                <CauseCard>
                    <ImageContainer>
                        <CartImage src={ImageOne} alt="cause image" />
                    </ImageContainer>
                    <CartH2> hello there</CartH2>
                    <CartP>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</CartP>
                </CauseCard>
                {
                    //   card-Two
                }
                <CauseCard>
                    
                    <ImageContainer>
                        <CartImage src={ImageTwo} alt="cause image" />
                    </ImageContainer>
                    <CartH2>hello there </CartH2>
                    <CartP>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</CartP>
                </CauseCard>
                
                {
                    //   card-Three
                }
                <CauseCard>
                    
                    <ImageContainer>
                        <CartImage src={ImageThree} alt="cause image" />
                    </ImageContainer>
                    <CartH2>hello there </CartH2>
                    <CartP>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</CartP>
                </CauseCard>

            </CausesWrapper>
        </CauseSection>
    )
}

export default CausesComponent;

