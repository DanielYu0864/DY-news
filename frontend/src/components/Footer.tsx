import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy;{' '}
            <a href='https://daniel-adam-yu.netlify.app/'>Daniel Yu</a> | 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
