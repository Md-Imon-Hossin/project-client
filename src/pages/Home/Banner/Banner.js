import React from 'react';
import { Carousel } from 'react-bootstrap';
// Banner Image Import
import bannerOne from '../../../img/slider1.jpg'
import bannerTwo from '../../../img/slider2.jpg'

const Banner = () => {
    return (
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerOne}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bannerTwo}
      alt="Second slide"
    />
  </Carousel.Item>
</Carousel>
    );
};
export default Banner;