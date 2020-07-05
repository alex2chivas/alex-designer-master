import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import aboutImage from '../../images/about-image.jpg';

const AboutList = ({ login }) => {
	return (
		<React.Fragment>
			<Row className='about-image-wrapper'>
				<Col xs='auto' className='about-image'>
					<Image src={aboutImage} className='img' roundedCircle />
					<Col className='about-content'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolor consectetur
						magnam aperiam, unde quis ipsam veritatis amet at quam itaque voluptates ipsum eaque ex
						voluptatibus? Quasi laboriosam ducimus accusantium. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Harum corporis aliquam veniam quasi, nihil, rem minima
						nulla ipsum accusantium dolorum vel molestiae quo molestias sed voluptatibus sapiente
						consectetur eum unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloremque, porro repellat id officia corporis sunt quae saepe pariatur ex eligendi
						mollitia, dignissimos, sint explicabo facilis consequatur laboriosam ipsam magni
					</Col>
				</Col>
			</Row>
		</React.Fragment>
	);
};

export default AboutList;
