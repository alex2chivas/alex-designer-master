import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const ImageCard = ({ title, onEdit, onDelete, login, picture, id }) => {
	const [ primaryStyle, SetPrimaryStyle ] = useState('');
	const [ primaryColor, SetPrimaryColor ] = useState('display-none');

	const renderContent = () => {
		if (login) {
			return (
				<Card.Footer className="edit-delete-wrapper">
					<div>{onEdit}</div>
					<div>{onDelete}</div>
				</Card.Footer>
			);
		}
	};

	const handleMouseEnter = () => {
		SetPrimaryColor('display-color');
		SetPrimaryStyle('img-blur');
	};

	const handleMouseLeave = () => {
		SetPrimaryColor('display-none');
		SetPrimaryStyle('');
	};

	return (
		<React.Fragment>
			<Card className="bg-dark text-white card-wrapper">
				<Card.Img src={picture} className={`post-image ${primaryStyle}`} alt="Card" />
				<Col className={`card-title ${primaryColor}`}>{title}</Col>
				<Link to={`/design/collection/${id}`}>
					<Card.ImgOverlay
						className={`content-wrapper`}
						onMouseEnter={() => handleMouseEnter()}
						onMouseLeave={() => handleMouseLeave()}
					/>
				</Link>
				<Row className="btns-wrapper">
					<Col>{renderContent()}</Col>
				</Row>
			</Card>
		</React.Fragment>
	);
};

export default ImageCard;
