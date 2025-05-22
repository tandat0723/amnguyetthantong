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
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <div className="navBar1">
      <Navbar color="dark" dark className="fixed-top w-100 h-12 d-flex justify-content-center" expand="md">
        <NavItem>
          <Link to="/" className="text-white">
            JSOM
          </Link>
        </NavItem>
        <NavbarToggler style={{ width: 'w-100' }} />
        <Collapse className="" navbar style={{ color: 'white', width: 'w-100', height: 'h-12', }}>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link to="/" >
                <p className={`m-2 ${pathName === '/' ? 'text-white' : 'text-secondary'}`}>
                  Trang Chủ
                </p>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/MostLikedPost">
                <p className={`m-2 ${pathName === '/MostLikedPost' ? 'text-white' : 'text-secondary'}`} >
                  Blog
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
