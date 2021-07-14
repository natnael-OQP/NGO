import React from 'react'
import styled, { css } from 'styled-components/macro';
import { menuData } from '../../data/menu.data';
import { CustomButton } from '../button/button';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --------------------------------------------------------
const DropDownContainer = styled.div`
    position:fixed;
    background-color: #1A1C2C;
    top: ${({isOpen})=>(isOpen?'0':'-100%')};
    left: 0;
    width: 100%;
    height: 100%;
    z-index:999;
    display: grid;
    align-items: center;
    transition: all .5s ease-in-out;
    opacity:${({isOpen})=>(isOpen?"1":"0")};
`;

// --------------------------------------------------------
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    background: transparent;
`;

// --------------------------------------------------------
const CloseIcon = styled(FaTimes)`
    color:#fff;
    font-size:2rem;
    cursor:pointer;
    transition: all 0.2s linear;
    &:hover{
        transform: rotate(90deg);
        color: #fff;
    }

`;

// --------------------------------------------------------
const DropDownWrapper = styled.div`

`;

// --------------------------------------------------------
const DropDownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,50px);
    align-items: center;
    margin-bottom: 4rem;
    @media screen and (max-width:768px){
        grid-template-rows: repeat(4,42px)
    }
    @media screen and (max-width:488px){
        grid-template-rows: repeat(4,36px)
    }
`;

// --------------------------------------------------------
const DropDownMenuLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content:center;
    color: #fff;
    transition: all .5s ease;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing:.03rem;
    transition: all .3s ease-in-out ;
    text-shadow:0 0 4px rgba(0,0,0,0.5);
    &:hover {
        color: #83BA09;
        font-weight: 600;
    }
    @media screen and (max-width:768px){
        font-size: 1.2rem;
    } 
    @media screen and (max-width:488px){
        font-size: 1rem;
    } 
`;

// --------------------------------------------------------
const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;



const Dropdown = ({toggle,isOpen}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}  >
            <Icon>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <DropDownWrapper>
                <DropDownMenu>
                    {
                        menuData.map((item,index) => (
                            <DropDownMenuLink key={index} to={item.link}>
                                {item.title}
                            </DropDownMenuLink>
                        ))
                    }
                </DropDownMenu>
                <ButtonWrap>
                    <CustomButton
                        // Big='true'
                        Font="16px"
                        to="/contact"
                        Color="#000b1a"
                        css={`
                            font-weight:600;
                            border-radius:1.5rem;
                            &:hover{
                                box-shadow:0px 0px 10px rgba(225,225,30,225)
                            }
                            @media screen and (max-width:768px){
                                padding: 10px 14px;
                                font-weight:600;
                                font-size:.9rem
                            }
                        `}
                    >
                        Donate now
                    </CustomButton>
                </ButtonWrap>
            </DropDownWrapper>
        </DropDownContainer>
    )
}

export default Dropdown;
