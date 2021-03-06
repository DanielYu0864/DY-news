import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MainPage from './screens/MainPage';
import TWNewsPage from './screens/TWNewsPage';
import Footer from './components/Footer';
import CategoryNav from './components/CategoryNav';
import { categoryList } from './utils/categoryList';

function App() {
  return (
    <Router>
      <Header />
      <CategoryNav />
      <main>
        {/* {categoryList.map((e: any) => (
          <Route path={`/twnews/${e}`} component={TWNewsPage} />
        ))} */}
        {/* {categoryList.map((e: any) => (
          <Route path={`usnews/${e}`} component={MainPage} />
        ))} */}
        <Route path={`/twnews/:category`} component={TWNewsPage} />
        <Route path={`/usnews/:category`} component={MainPage} />
        <Route path='/twnews' component={TWNewsPage} exact />
        <Route path='/' component={MainPage} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
