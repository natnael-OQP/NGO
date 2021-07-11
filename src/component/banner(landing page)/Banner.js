import React,{useState,useRef,useEffect} from 'react'
import styled,{css} from 'styled-components/macro';
import { CustomButton } from '../button/button'
import { IoMdArrowForward } from 'react-icons/io'
import {IoArrowForward,IoArrowBack} from 'react-icons/io5'
// ----------------------------------------- root style --------------------------------
// ------ Flexy
const Flexy = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;
// ----- Arrow-button
const ArrowButton = css`
    background-color: #75A608;
    width: 50px;
    height: 50px;
    border-radius:50%;
    color: #FFFFFF;
    cursor: pointer;
    padding: .6rem;
    margin-right: 1rem;
    user-select:none;
    transition: .4s;
    &:hover{
        background-color: #83BA09;
        transform: scale(1.04);
    }
`;
// ------ end-of-root-style
// ---------------------------------------------------------------------- banner-container-section
const BannerContainers = styled.section`
    height: 100vh;
    width: 100%;
    max-width:1400px;
    margin:0 auto;
    position: relative;
    overflow: hidden;
`;

// ----------------------------------------- banner-wrapper
const BannerWrapper = styled.div`
    ${Flexy}
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

// ----------------------------------------- slide
const BannerSlide = styled.div`
    width: 100%;
    height: 100%;
    z-index:1;
`;

// ----------------------------------------- slider
const BannerSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${Flexy}
    &::before{
        content: '';
        position:absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        overflow: hidden;
        left: 0;
        z-index:2;
        opacity: 0.5;
        background: linear-gradient(
            to bottom,rgba(0,0,0,1),rgba(0,0,0,0.5),rgba(0,0,0,0.4) 
        );
    }
`;

// ----------------------------------------- Banner-image
const BannerImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

// ----------------------------------------- Banner-content
const BannerContent = styled.div`
        position: absolute;
        left: 50px;
        display: flex;
        z-index:10;
        flex-direction: column;
        color:#fff;
        max-width:1400px;
        width: calc(100% -100px);
        h1{
            margin-right: 2rem;
            margin-bottom: .8rem;
            font-size:clamp(1rem,8vw,2.9rem);
            text-shadow:0 0 20px rgba(0,0,0,0.5);
            font-weight:500;
            text-transform:capitalize;
            text-align:left;
        }
        p{
            margin-bottom: .8rem;
            text-shadow:0 0 20px rgba(0,0,0,0.5);
            font-size: 1.1rem;
            padding-left: .5rem;
        }
`;

// ----------------------------------------- Banner-content
const Arrow = styled(IoMdArrowForward)`
    font-size:2rem;
    color:#fff;
    margin-left:.3rem;
`;
// ----------------------------------------------------------------------- slider button section 
// --------------- slider button container
const SliderButton = styled.div`
    position: absolute;
    bottom:30px;
    right:20px;
    display: flex;
    z-index:100;
`;
// --------------- prev button 
const PrevButton = styled(IoArrowBack)`
    ${ArrowButton}
`;
// --------------- next button
const NextButton = styled(IoArrowForward)`
    ${ArrowButton}
`;
// ---------------------------------------------------------------------  banner-component
const  Banner = ({ slides }) => {
    const [counter, setCounter] = useState(0)
    const length = slides.length
    


    //---------------------------- next-barrow-click 
    const next = () => {
        setCounter(counter === length - 1 ? 0 : counter + 1)
    }

    //--------------------------- Prev-arrow-click 
    const prev = () => {
        setCounter(counter === 0 ? length - 1 : counter - 1 )
    }
    
    return (
        <BannerContainers>
            <BannerWrapper>
                {
                    slides.map((slide, index) => (
                        <BannerSlide key={index}>
                            {index === counter && (
                                <BannerSlider>
                                    <BannerImage src={ slide.image } alt={slide.alt}/>
                                    <BannerContent>
                                        <h1>{slide.title}</h1>
                                        <p>{slide.info}</p>
                                        <CustomButton css={`
                                                ${Flexy}
                                                height: 40px;
                                                width: 150px;
                                                max-width:150px;
                                                border-radius:1.88rem;
                                            `}
                                        >
                                            {slide.label}
                                            <Arrow />
                                        </CustomButton>
                                    </BannerContent>
                                </BannerSlider>
                            )}
                        </BannerSlide>
                    ))
                }
                <SliderButton>
                    <PrevButton
                        onClick={prev}
                    />
                    <NextButton
                        onClick={next}
                    />
                </SliderButton>
            </BannerWrapper>
        </BannerContainers>
    )
}

export default Banner;
