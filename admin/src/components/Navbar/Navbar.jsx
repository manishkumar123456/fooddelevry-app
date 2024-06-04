/* eslint-disable no-unused-vars */
import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'


const Navbar = (setShowLogin) => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo} alt=""/>
        <h1>Admin panel</h1>
        <img className='profile' src={assets.profile_image} alt=""/>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
            <div className='navbar-profile'>
                <ul className='nav-profile-dropdown'>
                    
                </ul>
            </div>
    </div>
  )
}

export default Navbar