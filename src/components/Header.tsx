// import { LinkContainer } from 'react-router-bootstrap'; // = to Link from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router-dom';

type HeaderProps = {
  location?: any;
};

const Header: React.FC = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary p-0'>
      <Container className='container-fluid pl-3'>
        <Link to='/'>
          <Nav className='navbar-brand' style={{ fontWeight: 400 }}>
            DY.
          </Nav>
        </Link>
        {/* <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button> */}

        <div className='collapse navbar-collapse' id='navbarColor01'>
          {location.pathname.split('/')[1] === 'twnews' ? (
            <Nav className='navbar-nav me-auto' activeKey={location.pathname}>
              <Link to='/'>
                <Nav.Item className='nav-link'>US Hot</Nav.Item>
              </Link>
              <Link to='/twnews'>
                <Nav.Item className='nav-link active'>TW Hot</Nav.Item>
              </Link>
            </Nav>
          ) : (
            <Nav className='navbar-nav me-auto' activeKey={location.pathname}>
              <Link to='/'>
                <Nav.Item className='nav-link active'>US Hot</Nav.Item>
              </Link>
              <Link to='/twnews'>
                <Nav.Item className='nav-link '>TW Hot</Nav.Item>
              </Link>
            </Nav>
          )}

          {/* <Nav className='navbar-nav me-auto' activeKey={location.pathname}>
            <Link to='/'>
              <Nav.Item className='nav-link'>US Hot</Nav.Item>
            </Link>
            <Link to='/twnews'>
              <Nav.Item className='nav-link'>TW Hot</Nav.Item>
            </Link>

            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Business
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Science
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Technology
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Health
              </a>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                data-bs-toggle='dropdown'
                href='#'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='#'>
                  Action
                </a>
                <a className='dropdown-item' href='#'>
                  Another action
                </a>
                <a className='dropdown-item' href='#'>
                  Something else here
                </a>
                <div className='dropdown-divider'></div>
                <a className='dropdown-item' href='#'>
                  Separated link
                </a>
              </div>
            </li>
          </Nav> */}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
