import './NavMenu.scss'
import NavItems from './NavItems/NavItems'
import React from 'react'
import menu from '../../assets/images/menu-icon.png'

type NavMenuProps = {
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>
    showNav: boolean
}

const NavMenu = ({setShowNav, showNav}:NavMenuProps) => {
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
    <div>
        <nav className='nav'>
            <h1 className='nav__title'>BEERS R US</h1>
            {showNav && <NavItems toggleNav={toggleNav} />}
            <img
                src={menu}
                className="nav__item"
                alt="menu icon"
                onClick={toggleNav}
            />
        </nav>
    </div>
    )
}

export default NavMenu
