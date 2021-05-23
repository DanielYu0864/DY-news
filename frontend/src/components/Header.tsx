import { LinkContainer } from 'react-router-bootstrap'; // = to Link from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Nav className='navbar navbar-expand-lg navbar-dark bg-primary p-0'>
      <Container className='container-fluid'>
        <a className='navbar-brand' href='/'>
          DY.
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Hot
              </a>
            </li>
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
          </ul>
        </div>
      </Container>
    </Nav>
  );
};

export default Header;
