import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Col,
  Row,
  CardColumns,
  Card,
  CardDeck,
} from 'react-bootstrap';
import NewsCards from '../components/NewsCards';
import NewsCarousels from '../components/NewsCarousels';
import WeatherCards from '../components/WeatherCards';
import { news_data } from '../data';
// // todo: CSS: try to make every card hight be the same
// // todo: HTML: change all the html into jsx or tsx (ex: div -> Card)
// todo: component: news detaill page (or pop up box)
// // todo: get the news form data.ts in to Main page
// todo: styling weather cards
// todo: openWeatherMap api: fetch weather info into weather cards
// todo: NEWS_API: try to stall/fetch news into news-cards, new carousels
// todo: OPEN_WEATHER_API: try to stall/fetch weather info into weather-cards
// todo: BACKEND: does it need to have backend to call news-api?
// todo: Firebase: host on firebase
const MainPage: React.FC = () => {
  // const dispatch = useDispatch();

  // const newsList = useSelector((state: any) => state.news);

  // const { loading, error, data } = newsList;

  // useEffect(() => {
  //   dispatch(newsList());
  // }, [dispatch]);

  const { articles } = news_data;
  console.log(articles);

  return (
    <Container className='main-container'>
      <Row className='mb-5 align-items-center'>
        <Col xs={12} sm={12} md={4}>
          <WeatherCards />
        </Col>
        <Col xs={12} sm={12} md={8}>
          <NewsCarousels articles={articles.filter((item, i) => i < 3)} />
        </Col>
      </Row>
      <Row>
        {articles.map((article, i) => {
          if (i > 2 && article.description) {
            return (
              <Col className='h-100' key={i} xs={12} md={6} lg={4}>
                <NewsCards article={article} />
              </Col>
            );
          }
        })}
      </Row>
    </Container>
  );
};

export default MainPage;
