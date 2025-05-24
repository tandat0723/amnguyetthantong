import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import './NavigationBar.css'
import { Link } from 'react-router-dom'

function NavigationBar() {
  const pathName = window.location.pathname

  return (
    <div className="navBar1">
      <Navbar color="dark" dark className="fixed-top w-100 h-12 d-flex justify-content-center" expand="md">
        <NavItem>
          <Link to="/" className="text-white">
            JSOM
          </Link>
        </NavItem>
        <NavbarToggler style={{ width: 'w-100' }} />
        <Collapse navbar style={{ color: 'white', width: 'w-100', height: 'h-12' }}>
          <Nav className="mx-auto" navbar>
            <NavItem className="navItem">
              <Link to="/" >
                <p className={`m-2 ${pathName === '/' ? 'text-white' : 'text-secondary'}`}>
                  Vấn Đáp
                </p>
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link to="/Blog">
                <p className={`m-2 ${pathName === '/blog' ? 'text-white' : 'text-secondary'}`} >
                  Blog
                </p>
              </Link>
            </NavItem>
            <NavItem className="navItem">
              <Link to="/Profile">
                <p className={`m-2 ${pathName === '/profile' ? 'text-white' : 'text-secondary'}`} >
                  Về chúng tôi
                </p>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
