import React from 'react'
import blackCross from '../../../assets/images/black-cross.png'
import { Link } from 'react-router-dom'
import './NavItems.scss'

type NavItemsProps = {
    toggleNav: () => void
}

const NavItems = ({toggleNav}: NavItemsProps) => {
    return (
    <div className='nav-menu'>
        <div className='nav-menu__content'>
            <img
                src={blackCross}
                alt="Close menu"
                className="nav-menu__cross"
                onClick={toggleNav}
                />
                <Link to="/" className="nav-menu__item" onClick={toggleNav}>
                    Home
                </Link>
        </div>
    </div>
    )
}

export default NavItems
