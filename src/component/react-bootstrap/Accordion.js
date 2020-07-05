import React from 'react';
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai';

import TypeReact from '../animeContent/typeReact';
import OverlayDisplay from './overlay';

const AccordionDisplay = () => {
	return (
		<Accordion>
			<Card className='accordion-container'>
				<Card.Header className='header-wrapper'>
					<Row xs={12}>
						<Button
							className='btn-content'
							href='https://www.google.com/maps/@34.0326418,-118.2255051,10.62z'
							target='_blank'
						>
							<TypeReact
								strings={[
									'Welcome',
									'click here to view <strong>L.A google map</strong> ',
									'click the email logo bellow to get in contact',
									'hope to hear from you soon'
								]}
							/>
						</Button>
					</Row>
					<Row>
						<Col xs={12} className='links-wrapper'>
							<Row className='links-content'>
								<Col xs={12} className='link-content'>
									Email
								</Col>
								<Col xs={12}>
									<OverlayDisplay type='CONTACT_EMAIL'>
										<a href='mailto:ale.styling.design20@gmail.com'>
											<AiOutlineMail className='email-logo' />
										</a>
									</OverlayDisplay>
								</Col>
							</Row>
						</Col>
					</Row>
				</Card.Header>
			</Card>
		</Accordion>
	);
};

export default AccordionDisplay;
