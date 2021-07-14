import React from 'react'
import styled ,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../../data/menu.data';
import { CustomButton } from '../button/button';
import { FaBars } from 'react-icons/fa'

// ----------------------------------------------- root style
//  -- nav-links
const NavLinks = css`
    color:#fff;
    padding:0 1rem;
    display: flex;
    text-decoration: none;
    font-size: 1.05rem;
`;
// -- flex
export const Flexy = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
// X-root
// ----------------------------------------------- nav-container
const Nav = styled.nav`
    height: 62px;
    padding: .3rem 2rem;
    /* background:#000d1e; */
    max-width: 1400px;
    margin: 0 auto;
    ${Flexy};
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index:100;
`
// ----------------------------------------------- logo
const Logo = styled(Link)`
    ${NavLinks}
    font-style:italic ;
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
const NavMenuLink = styled(Link)`
    ${NavLinks}
    
`
// ----------------------------------------------- contact ass button 
const NavBtn = styled.div`
    @media screen and (max-width:768px){
        display: none;
    }
`
//----------------------------------------------- header-component
const Header = ({toggle}) => {
    return (
        <Nav>
            <Logo to='/' >NGO</Logo>
            <MenuBar onClick={toggle} />
            <NavMenu>
            {
                menuData.map((items, index) => (
                    <NavMenuLink key={index} to={items.link} > {items.title} </NavMenuLink>
                )
            )}
            </NavMenu>
            <NavBtn>
                <CustomButton
                    css={`
                        /* z-index:1010; */
                    `}
                    to="/contact"
                    Font="16px"
                >Donate now</CustomButton>
                
            </NavBtn>
        </Nav>
    )
}

export default Header;
