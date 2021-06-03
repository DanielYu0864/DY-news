import React from 'react';
import { Container, Card } from 'react-bootstrap';

type CardProps = {
  article?: any;
  language?: string;
};

const NewsCards: React.FC<CardProps> = ({ article, language }) => {
  const toLocalTime = (publictAt: string) => {
    const date = new Date(publictAt);

    // console.log(date.toString());

    return date.toString().split('GMT')[0];
  };

  // console.log(article);
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Card.Title style={{ fontWeight: 700 }}>{article.title}</Card.Title>
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
        <Card.Text style={{ fontWeight: 500 }}>{article.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={article.url} className='card-link'>
          <i className='fas fa-newspaper'></i>{' '}
          {language === 'tw' ? '完整報導' : 'News link'}
        </Card.Link>
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
