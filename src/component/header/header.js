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
    background: #845EC2;
    ${Flexy};
    justify-content: space-between;
    position: relative;
`
// ----------------------------------------------- logo
const Logo = styled(Link)`
    ${NavLinks}
    font-style:italic ;
`
// ----------------------------------------------- menuBar
const MenuBar = styled(FaBars)`
    display: none;
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
const Header = () => {
    return (
        <Nav>
            <Logo to='/' >NGO</Logo>
            <MenuBar />
            <NavMenu>
            {
                menuData.map((items, index) => (
                    <NavMenuLink key={index} to={items.link} > {items.title} </NavMenuLink>
                )
            )}
            </NavMenu>
            <NavBtn>
                <CustomButton
                    to="contact"
                    BackgroundColor="#fb8500"
                    Color="#fff"
                    Font="16px"
                >contact as</CustomButton>
            </NavBtn>
        </Nav>
    )
}

export default Header;
