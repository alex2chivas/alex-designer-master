import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';

import GoogleAuth from '../auth/googleAuth';
import OverlayDisplay from '../react-bootstrap/overlay';

const Header = () => {
	return (
		<Container fluid className='header-navigation'>
			<Row justify='center' className='header-content-wrapper'>
				<Col style={{ marginRight: '15px' }}>
					<GoogleAuth />
				</Col>
				<Row>
					<Col>
						<OverlayDisplay type='HOME'>
							<Link to='/' className='link'>
								Home
							</Link>
						</OverlayDisplay>
					</Col>
					<Col>
						<OverlayDisplay type='ABOUT'>
							<Link to='/design/about' className='link'>
								About
							</Link>
						</OverlayDisplay>
					</Col>
					<Col>
						<OverlayDisplay type='CONTACT'>
							<Link to='/design/contact' className='link'>
								Contact
							</Link>
						</OverlayDisplay>
					</Col>
					<Col>
						<OverlayDisplay type='COLLECTIONS'>
							<Link to='/design/collection' className='link'>
								Collection
							</Link>
						</OverlayDisplay>
					</Col>
				</Row>

				<Col className='ig-wrapper'>
					<OverlayDisplay type='INSTAGRAM'>
						<a
							target='_blank'
							href='https://www.instagram.com/_beautesombre_/'
							rel='noopener noreferrer'
						>
							<FaInstagram className='instagram' />
						</a>
					</OverlayDisplay>
				</Col>
			</Row>
		</Container>
	);
};

export default Header;
