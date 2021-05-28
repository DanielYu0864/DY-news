// import { LinkContainer } from 'react-router-bootstrap'; // = to Link from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Navbar className='navbar navbar-expand-lg navbar-dark bg-primary p-0'>
      <Container className='container-fluid'>
        <Nav.Link className='navbar-brand' href='/'>
          DY.
        </Nav.Link>
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
          <Nav className='navbar-nav me-auto'>
            <Link to='/'>
              <Nav.Item className='nav-link'>US Hot</Nav.Item>
            </Link>
            <Link to='/twnews'>
              <Nav.Item className='nav-link'>TW Hot</Nav.Item>
            </Link>

            {/* <li className='nav-item'>
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
            </li> */}

            {/* <li className='nav-item dropdown'>
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
            </li> */}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
