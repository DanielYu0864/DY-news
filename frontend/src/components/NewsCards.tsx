import React from 'react';
import { Container, Card } from 'react-bootstrap';

type CardProps = {
  article?: any;
};

const NewsCards: React.FC<CardProps> = ({ article }) => {
  const toLocalTime = (publichAt: string) => {
    const date = new Date(publichAt);

    // console.log(date.toString());

    return date.toString().split('GMT')[0];
  };

  // console.log(article);
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className='text-muted'>{article.author}</Card.Subtitle>
      </Card.Body>
      <Card.Img
        src={
          article.urlToImage
            ? article.urlToImage
            : 'https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png'
        }
      />
      <Card.Body>
        <Card.Text>{article.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <a href={article.url} className='card-link'>
          News link
        </a>
        {/* <a href='#' className='card-link'>
          Read more
        </a> */}
      </Card.Body>
      <Card.Footer className='card-footer text-muted'>
        {toLocalTime(article.publishedAt)}
      </Card.Footer>
    </Card>
  );
};

export default NewsCards;
