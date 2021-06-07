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
import { listNews } from '../actions/newsActions';

const TWNewsPage: React.FC = () => {
  //* get news from redux******************************************************************************
  const dispatch = useDispatch();

  const newsList = useSelector((state: any) => state.news);

  const { loading, error, data } = newsList;
  // console.log(data);
  useEffect(() => {
    dispatch(listNews('tw'));
  }, []);
  const articles = data;
  //******************************************************************************************************
  // const loading = false,
  //   error = null;
  // const { articles } = news_data;
  // console.log(articles);

  return (
    <Container className='main-container'>
      <Row className='mb-3 align-items-center'>
        <Col xs={12} sm={12} md={4}>
          <WeatherCards city='Kaohsiung' />
        </Col>
        <Col xs={12} sm={12} md={8}>
          {!loading && !error && (
            <NewsCarousels
              articles={articles.filter((item: any, i: number) => i < 3)}
            />
          )}
        </Col>
      </Row>
      <Row>
        {!loading &&
          !error &&
          articles.map((article: any, i: number) => {
            if (i > 2 && article.description) {
              return (
                <Col className='h-100' key={i} xs={12} md={6} lg={4}>
                  <NewsCards article={article} key={i} language='tw' />
                </Col>
              );
            }
          })}
      </Row>
    </Container>
  );
};

export default TWNewsPage;
