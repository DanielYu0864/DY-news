import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { categoryList } from '../utils/categoryList';

const CategoryNav: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const unit = location.pathname.split('/')[1];

  const [category, setCategory] = useState('general');
  const categoryChooseHandler = (e: any) => {
    setCategory(e.target.innerHTML);
    if (unit === 'twnews') {
      history.push(`/twnews/${category}`);
    } else {
      history.push(`${category}`);
    }
  };

  useEffect(() => {
    console.log(unit);
    console.log('re-reander category nav: ' + category);
  }, [category]);

  return (
    <Container>
      <Navbar
        className='nav nav-pills mt-0 pt-0 pb-0 pl-0 d-flex flex-row'
        expand='sm'
        style={{ fontSize: '1rem' }}
      >
        <Nav as='li' className='nav-item '>
          {categoryList.map((e: string, i: number) =>
            e == category ? (
              <Nav.Item
                className='nav-link active'
                onClick={categoryChooseHandler}
                style={{ color: 'white' }}
                key={i}
              >
                {e}
              </Nav.Item>
            ) : (
              <Nav.Item
                className='nav-link'
                onClick={categoryChooseHandler}
                key={i}
              >
                {e}
              </Nav.Item>
            )
          )}
        </Nav>
        <Dropdown className='nav-item dropdown'>
          <Dropdown.Toggle
            className='dropdown-toggle'
            data-bs-toggle='dropdown'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu'>
            {categoryList.map((e: string, i: any) =>
              e == category ? (
                <Dropdown.Item className='nav-link active'>
                  <Dropdown.ItemText style={{ color: 'white' }} key={i}>
                    {e.toUpperCase()}
                  </Dropdown.ItemText>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  className='nav-link'
                  style={{ backgroundColor: 'white' }}
                  key={i}
                >
                  <Dropdown.ItemText>{e.toUpperCase()}</Dropdown.ItemText>
                </Dropdown.Item>
              )
            )}
            {/* <a className='dropdown-item' href='#'>
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
          </a> */}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </Container>
  );
};

export default CategoryNav;
