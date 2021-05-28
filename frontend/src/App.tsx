import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import MainPage from './screens/MainPage';
import TWNewsPage from './screens/TWNewsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path='/twnews' component={TWNewsPage} exact />
        <Route path='/' component={MainPage} exact />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
