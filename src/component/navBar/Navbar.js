import React,{useState} from 'react'
import Dropdown from '../Dropdown/Dropdown';
import Header from '../header/header';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBar, setNavBar] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen);
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY >=320) {
            setNavBar(true);
        }
        else {
            setNavBar(false);
        }
    })

    return (
        <>
        <Header toggle={toggle} navbar={navBar} />
        <Dropdown toggle={toggle} isOpen={isOpen} />
        </>
    )
}

export default Navbar;
