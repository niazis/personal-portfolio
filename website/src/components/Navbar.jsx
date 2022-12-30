import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='fixed w-full h-[80] flex justify-between items-center px-4 bg-[#19488d] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo name' style={{width: '50px'}}/>
        </div>
        <div>
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Skills</ul>
            <ul>Projects</ul>
            <ul>Contact</ul>
        </div>

    </div>
  )
}

export default Navbar