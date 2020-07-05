import React from 'react';
import { Container } from 'react-bootstrap';

import AboutList from './AboutList';

const About = (props) => {
	return (
		<Container className="about-container">
			<AboutList login={props.loginStatus} />
		</Container>
	);
};

export default About;
