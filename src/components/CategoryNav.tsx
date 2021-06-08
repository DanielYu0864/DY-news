import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Container } from 'react-bootstrap';
import { newsCategoryChange } from '../actions/newsActions';
import { categoryList, categoryListTW } from '../utils/categoryList';

const CategoryNav: React.FC = () => {
  const dispatch = useDispatch();
  const newsCategory = useSelector((state: any) => state.newsCategory);

  const history = useHistory();
  const location = useLocation();
  const country = location.pathname.split('/')[1];
  const [category, setCategory] = useState('general');

  const ChineseTranslater = (category: string) => {
    let index = 0;
    categoryListTW.map((ele, i) => {
      if (ele === category) return (index = i);
    });

    return categoryList[index];
  };

  const categoryChooseHandler = async (e: any) => {
    if (country === 'twnews') {
      let translate = ChineseTranslater(e.target.innerHTML);
      await dispatch(newsCategoryChange(translate));
      await setCategory(translate);
    } else {
      await dispatch(newsCategoryChange(e.target.innerHTML.toLowerCase()));
      await setCategory(e.target.innerHTML.toLowerCase());
    }
  };

  useEffect(() => {
    // console.log(newsCategory.data);
    console.log('re-reander category nav: ' + category);
    if (country === 'twnews') {
      history.push(`/twnews/${newsCategory.data}`);
    } else {
      history.push(`/usnews/${newsCategory.data}`);
    }
  }, [category]);

  return (
    <Container>
      <Navbar
        className='nav nav-pills mt-0 pt-0 pb-0 pl-0 d-flex flex-row'
        expand='sm'
        style={{ fontSize: '1rem' }}
      >
        <Nav as='li' className='nav-item big-navber'>
          {categoryList.map((e: string, i: number) =>
            e == newsCategory.data ? (
              <Nav.Item
                className='nav-link active'
                onClick={categoryChooseHandler}
                style={{ color: 'white' }}
                key={i}
              >
                {country === 'twnews' ? categoryListTW[i] : e}
              </Nav.Item>
            ) : (
              <Nav.Item
                className='nav-link'
                onClick={categoryChooseHandler}
                key={i}
              >
                {country === 'twnews' ? categoryListTW[i] : e}
              </Nav.Item>
            )
          )}
        </Nav>
        <Dropdown className='nav-item dropleft nav-dropdown-toggle'>
          <Dropdown.Toggle
            className='pb-0'
            bsPrefix='p-2'
            data-bs-toggle='dropdown'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <i className='fas fa-bars' style={{ fontSize: '2rem' }}></i>
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropdown-menu'>
            {categoryList.map((e: string, i: any) =>
              e == category ? (
                <Dropdown.Item
                  className='nav-link active'
                  onClick={categoryChooseHandler}
                >
                  <Dropdown.ItemText style={{ color: 'white' }} key={i}>
                    {country === 'twnews' ? categoryListTW[i] : e.toUpperCase()}
                  </Dropdown.ItemText>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item
                  className='nav-link'
                  onClick={categoryChooseHandler}
                  style={{ backgroundColor: 'white' }}
                  key={i}
                >
                  <Dropdown.ItemText>
                    {country === 'twnews' ? categoryListTW[i] : e.toUpperCase()}
                  </Dropdown.ItemText>
                </Dropdown.Item>
              )
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </Container>
  );
};

export default CategoryNav;
