import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth offset={-260} duration={500}>Testimonials</Link></li>
            <li><button className='btn'><Link to='contact'
            smooth offset={-260} duration={500}>Contact Us</Link></button></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar