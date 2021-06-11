import React from 'react';
import { MenuItems } from './Menuitems';
import './Navbar.css';

import CartButton from '../Button/CartButton'

const Navbar = () => {
  
  return(
    <nav className="NavbarItems">
      <h1 className="navbar-logo">MyStore<i className="fab fa-buysellads"></i></h1>
      <div className="menu-icon">
      </div>
      <ul className='nav-menu'>
        {MenuItems.map((item) => {
          return (
            <li key={item.title}>
              <a className={item.cName} href={item.url}>
              {item.title}
              </a>
            </li>
            )}
          )
        }
        <CartButton text="nav-links"/>
      </ul>
    </nav>
  )
}

export default Navbar;
