import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im'



export const Navbar = () => {

    const [Mobile, setMobile] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <>
                    <h2 className='logo'>Sayra Flores</h2>
                    <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Portfolio'>Portfolio</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                    </ul>

                    <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <ImCross /> : <FaBars />} </button>
                </>
            </nav>

        </>
    )
}
export default Navbar;
