import React from 'react'
import {Nav, NavLink,NavIcon,Bars} from './Navbar.styles';
const NavBar = () => {
    return (
        <>
          <Nav>
              <NavLink to='/'>Pizza</NavLink>
              <NavIcon>
                  <p>Menu</p>
                  <Bars />
              </NavIcon>
              </Nav> 
        </>
    )
}

export default NavBar;
