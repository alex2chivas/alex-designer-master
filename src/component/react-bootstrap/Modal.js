import React, { useState } from 'react';
import { Button, Modal, Row, Col, Container } from 'react-bootstrap';

const ModalDisplay = ({ title, content, onDismiss, actions }) => {
	const [ lgShow, setLgShow ] = useState(true);

	return (
		<Container onClick={onDismiss}>
			<Button onClick={() => setLgShow(true)} style={{ display: 'none' }} />
			<Modal
				className='large-modal'
				size='lg'
				show={lgShow}
				onHide={() => setLgShow(false)}
				aria-labelledby='example-modal-sizes-title-lg'
			>
				<Modal.Header closeButton>
					<Modal.Title id='example-modal-sizes-title-lg'>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className='modal-delete-wrapper'>
					<Row className='content-wrapper'>
						<Col>{content}</Col>
					</Row>
					<Row className='action-wrapper'>
						{actions}
					</Row>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

export default ModalDisplay;
