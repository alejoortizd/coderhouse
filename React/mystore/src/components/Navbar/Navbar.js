import React, { Component } from 'react';
import { MenuItems } from './Menuitems';
import './Navbar.css'

const Navbar = () => {
  
  return(
    <nav className="NavbarItems">
      <h1 className="navbar-logo">MyStore<i className="fab fa-buysellads"></i></h1>
      <div className="menu-icon">
      </div>
      <ul className='nav-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
              {item.title}
              </a>
            </li>
            )}
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar;
