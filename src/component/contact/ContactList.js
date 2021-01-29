import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AccordionDisplay from '../react-bootstrap/Accordion';

const ContactList = () => {
	return (
		<React.Fragment>
			<Row xs="auto" className="contact-wrapper">
				<Col xs={12} md={12}>
					<AccordionDisplay />
				</Col>
				<Col />
			</Row>
		</React.Fragment>
	);
};

export default ContactList;
