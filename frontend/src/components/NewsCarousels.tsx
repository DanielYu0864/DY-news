import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const NewsCarousels: React.FC = () => {
  return (
    <Carousel className='h-100'>
      <Carousel.Item className='h-100'>
        <Image
          className='d-block w-100 h-100'
          src='https://www.usglc.org/media/2016/09/800x400.png'
          alt='First slide'
        />
        <Carousel.Caption className='pb-1'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <Image
          className='d-block w-100 h-100'
          src='https://www.usglc.org/media/2016/09/800x400.png'
          alt='Second slide'
        />

        <Carousel.Caption className='pb-1'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <Image
          className='d-block w-100 h-100'
          src='https://www.usglc.org/media/2016/09/800x400.png'
          alt='Third slide'
        />

        <Carousel.Caption className='pb-1'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default NewsCarousels;
