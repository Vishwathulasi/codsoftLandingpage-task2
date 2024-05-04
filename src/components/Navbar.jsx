import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h3>Menu</h3>
            <h3>Food</h3>
            <h3>services</h3>
            <h3>About Us</h3>
        </div>
        <div className='header__middle'>
            <h3>Pizza Time!!</h3>
        </div>
        <div className='header__right'>
            <SearchIcon/>
            <MenuIcon/>
        </div>
        </div>
  )
}

export default Navbar