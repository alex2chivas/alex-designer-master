import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NoMatch = () => {
	return (
		<Container style={{height: '90vh'}}>
			<Row className='error-msg-wrapper'>
				<Col xs='auto'>
					<div><h2>Error Please return Home</h2></div>
				</Col>
								<Col xs='auto'>
					<h3><NavLink to='/'>Return to the home page</NavLink></h3>
				</Col>
			</Row>
		</Container>
	);
};

export default NoMatch;
