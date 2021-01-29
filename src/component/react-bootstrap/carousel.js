import React from 'react';
import { Carousel } from 'react-bootstrap';

import building from '../../images/building.jpg';
import darkImg from '../../images/dark-image-one.jpeg';

const CarouselDisplay = () => {
	return (
		<Carousel className='carousel-content-wrapper img-content'>
			<Carousel.Item>
				<img className='d-block w-100' src={darkImg} alt='First slide' />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className='d-block w-100' src={building} alt='Second slide' />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselDisplay;
