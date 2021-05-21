import React from 'react';
import { Container, Col, Row, CardColumns, Card } from 'react-bootstrap';
import NewsCards from '../components/NewsCards';
import NewsCarousels from '../components/NewsCarousels';
import WeatherCards from '../components/WeatherCards';
// todo: CSS: try to make every card hight be the same
// todo: component: news detaill page (or putout box)
// todo: NEWS_API: try to stall/fetch news into news-cards, new carousels
// todo: OPEN_WEATHER_API: try to stall/fetch weather info into weather-cards
// todo: BACKEND: does it need to have backend to call news-api?
// todo: Firebase: host on firebase
const MainPage: React.FC = () => {
  return (
    <Container className='main-container'>
      <Row className='mb-5'>
        <Col xs={12} sm={12} md={4}>
          <WeatherCards />
        </Col>
        <Col xs={12} sm={12} md={8}>
          <NewsCarousels />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <NewsCards />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <NewsCards />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <NewsCards />
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
