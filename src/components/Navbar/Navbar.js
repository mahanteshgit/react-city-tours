import React from 'react';
import './Navbar.scss';

export default function Navbar (){
    const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY-eMm3GtCF_InV2v3kPtZeLGutH-xkgBnYIsXGV_FBdN-FcHUQ'
    return(
        <nav className='navbar'>
            <img src={logo} alt='logo' className='navLogo' />
            <ul className='nav-links'>
                <li>
                    <a href='/' className='nav-link'>home</a>
                </li>
                <li>
                    <a href='/' className='nav-link'>about</a>
                </li>
                <li>
                    <a href='/' className='nav-link active'>tours</a>
                </li>
            </ul>
        </nav>
    )
}