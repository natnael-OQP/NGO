import React from 'react';
// styled component
import styled ,{css} from 'styled-components/macro';
// react scroll
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';

import { menuData } from '../../data/menu.data';
import { CustomButton } from '../button/button';
import { FaBars } from 'react-icons/fa'

// ----------------------------------------------- root style
//  -- nav-links
const NavLinks = css`
    color:#fff;
    margin-right:1rem;
    display: flex;
    text-decoration: none;
    font-size: 1.05rem;
    cursor: pointer;
`;
// -- flex
const Flexy = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
// X-root
// ----------------------------------------------- nav-container
const Nav = styled.nav`
    height: 62px;
    padding: .3rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    ${Flexy};
    justify-content: space-between;
    position:fixed;
    top: 0;
    left: 0;
    background:${({navbar})=>(navbar? "#1A1C2C" : "")};
    width: 100%;
    z-index:${({navbar})=>(navbar?1000:99)};
`

// ----------------------------------------------- logo
const Logo = styled(LinkS)`
    ${NavLinks}
    font-style:italic;
    
`
// ----------------------------------------------- menuBar
const MenuBar = styled(FaBars)`
    display: none;
    transition: all .3s ease-in-out;
    &:hover {
        transform: rotate(720deg);
    }
    @media screen and (max-width:768px){
        display: block;
        cursor: pointer;
        font-size:1.6rem;
        color: #fff;
    }


`
// ----------------------------------------------- nav-menu-container
const NavMenu = styled.div`
    ${Flexy};
    @media screen and (max-width:768px){
        display: none;
    }
`
// ----------------------------------------------- nav-menu-items(link)
const NavMenuLink = styled(LinkS)`
    ${NavLinks}
    &.active{
        border-bottom: 1px solid #01bf71;
    }
`
// ----------------------------------------------- contact ass button 
const NavBtn = styled.div`
    @media screen and (max-width:768px){
        display: none;
    }
`
//----------------------------------------------- header-component
const Header = ({ toggle,navbar }) => {
    // logic part 
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <Nav navbar={navbar} >
            <Logo to='/' onClick={toggleHome} >NGO</Logo>
            <MenuBar onClick={toggle} />
            <NavMenu>
            {
                menuData.map((items, index) => (
                    <NavMenuLink
                        smooth={true}
                        offset={-62}
                        duration={1000}
                        spy={true}
                    
                    
                        key={index}
                        to={items.link}
                    > {items.title} </NavMenuLink>

                )
            )}
            </NavMenu>
            <NavBtn>
                <CustomButton
                    smooth={true}
                    duration={500}
                    spy={true}
                    css={`
                        border-radius:.5rem;
                        padding:.5rem 1.4rem; 
                    `}
                    to="/donate"
                    Font="16px"
                >Sign in</CustomButton>
                
            </NavBtn>
        </Nav>
    )
}

export default Header;
