import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { Link, useHistory, Router } from 'react-router-dom';

type CardProps = {
  articles?: any;
};

const NewsCarousels: React.FC<CardProps> = ({ articles }) => {
  // const history = useHistory();
  // console.log(articles);
  // const goToNewsLink = (url: string) => {
  //   history.push(url);
  //   console.log(url);
  // };
  return (
    <Carousel className='h-100'>
      {articles.map((article: any) => (
        <Carousel.Item className='h-100 overflow-hidden' key={article.title}>
          <a href={article.url}>
            <Image
              className='d-block w-100'
              style={{
                minHeight: '340px',
                maxHeight: '340px',
                objectFit: 'cover',
              }}
              src={article.urlToImage}
              alt={article.title}
            />
          </a>

          <Carousel.Caption className='pb-1'>
            {/* <h3>{article.title}</h3> */}
            <p style={{ fontSize: '0.9rem' }}>{article.title}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default NewsCarousels;
