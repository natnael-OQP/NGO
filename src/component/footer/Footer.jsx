import React from 'react'
// styled component
import styled from 'styled-components'
// react-scroll
import { Link as LinkS } from 'react-scroll'
// react-rou
import { Link as LinkR } from 'react-router-dom';
// react-icons
import { FaPhone } from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const FooterContainer = styled.div`
    
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top:50px;
    padding-bottom: 10px;
    background-color: #F4F4F8;
`;

const FooterWrapper = styled.div`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;

const FooterInfoSection = styled.div`
    width: 360px;
    padding-bottom: 1.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
        flex-wrap: wrap;

    }

`;

const Logo = styled.img`
    width: 100px;
    height: 60px;
    object-fit: contain;
`;

const LinkContainer = styled.div`
        flex: 1 1 auto;
        display: flex;
        justify-content: space-around;
        @media(max-width: 778px){
            width: 70%;
            justify-content: space-between;
        }
        @media(max-width: 490px){
            flex: auto;
            text-align: center;
            flex-direction: column;
        }
`;

const Navigation = styled.div`
    display: flex;
    flex-direction: column;
`;

const H2 = styled.h2`
    font-size:1.3rem;
    margin-bottom: .7rem;
    color:#1A1C2C;
`;

const NavLink = styled(LinkS)`
    padding-bottom: .3rem;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        transform:translateX(4px);
        color:#83BA09;
    }
    `;
    
const LinkRouting = styled(LinkR)`
    color: #000;
    font-weight: 600;
    transition: all .3s ease-in-out;
    &:hover {
        transform:translateX(4px);
        color:#83BA09;
    }
`;

const Contact = styled.div`
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

const Phone = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .3rem;
    &:hover{
        color:#83BA09;
    }

`;
const Link = styled.a`
    font-size: .9rem;
    font-family:'monospace' sans-serif;
    color:black;
    font-weight: 600;
`;
const PhoneIcon = styled(FaPhone)`
    margin-right: .5rem;
    `;

const Email = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        color:#83BA09;
    }
`;

const EmailIcon = styled(AiOutlineMail)`
        margin-right: .5rem;
        font-size:1.1rem;
`;

// copy right section
const Copyright = styled.div`
    text-align:center;
    width:100%;
    margin-top: 2rem;
`;

const P = styled.p`
    font-size: 14px;
    font-family: 'monospace' sans-serif;
    padding:0px .2rem;
    line-height: 1.2rem;
`;

const Footer = () => {
    return (
        <>
            <FooterContainer id="footer">
                <FooterWrapper>
                    <FooterInfoSection>
                        <Logo src="data:image/webp;base64,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" alt="Charity Logo" />
                        <P>I'm a paragraph add your own text and edit me Create a subtitle that summarizes your post in a few short, punchy sentences</P>
                    </FooterInfoSection>
                    <LinkContainer>
                        <Navigation>
                            <H2>Navigation</H2>
                            <NavLink to='home' >Home</NavLink>
                            <NavLink to='about' >About</NavLink>
                            <NavLink to='causes' >Causes</NavLink>
                            <LinkRouting to='/donate' >Donate</LinkRouting>
                        </Navigation>
                        <Contact>
                            <H2>Contact</H2>
                            <Phone>
                                <PhoneIcon />
                                <Link href="tel:+251 941248799 ">941 248 799</Link>
                            </Phone>
                            <Email>
                                <EmailIcon />
                                <Link href="mailto:makiya112545@gmail.com
                                ">you email address</Link>
                            </Email>
                        </Contact>
                    </LinkContainer>
                </FooterWrapper>
                <Copyright>
                    <P>Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made by Natnael </P>
                </Copyright>
            </FooterContainer>
        </>
    )
}

export default Footer;
