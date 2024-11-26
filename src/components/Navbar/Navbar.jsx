
import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search_icon.svg'
import BellIcon from '../../assets/bell_icon.svg'
import ProfileIcon from '../../assets/profile_img.png'
import CaretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'



function Navbar() {

  const navRef = useRef()

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      if (window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }
        else{
          navRef.current.classList.remove('nav-dark')
        }
    })
  })

  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languange</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={SearchIcon} alt="" className='icons'/>
        <p>Children</p>
        <img src={BellIcon} alt="" className='icons'/>
        <div className='navbar-profile'>
          <img src={ProfileIcon} alt="" className='profile'/>
          <img src={CaretIcon} alt="" />
            <div className='dropdown'>
              <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
