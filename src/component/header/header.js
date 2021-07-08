import React from 'react'
import styled ,{css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from '../../data/menu.data';
import { CustomButton } from '../button/button';


// ----------------------------------------------- root style
//  -- nav-links
const NavLinks = css`
    color:#fff;
    padding:0 1rem;
    display: flex;
    text-decoration: none;
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
`
// ----------------------------------------------- logo
const Logo = styled(Link)`
    ${NavLinks}
`
// ----------------------------------------------- menuBar
const MenuBar = styled.i`

`
// ----------------------------------------------- nav-menu-container
const NavMenu = styled.div`
    ${Flexy}
`
// ----------------------------------------------- nav-menu-items(link)
const NavMenuLink = styled(Link)`
    ${NavLinks}
`
const NavBtn = styled.div`

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
                <CustomButton to="contact" backgroundColor = "green" color="red" big="true">contact as</CustomButton>
            </NavBtn>
        </Nav>
    )
}

export default Header;
