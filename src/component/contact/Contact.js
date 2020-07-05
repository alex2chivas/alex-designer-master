import React from 'react';
import { Container } from 'react-bootstrap';
import ContactList from './ContactList';

const Contact = (props) => {
	return (
		<Container className="contact-container">
			<ContactList login={props.loginStatus} />
		</Container>
	);
};

export default Contact;
