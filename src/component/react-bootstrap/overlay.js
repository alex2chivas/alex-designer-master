import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const renderText = props => {
	if (props.type === 'HOME') {
		return 'head to Home Page';
	} else if (props.type === 'ABOUT') {
		return 'learn about me';
	} else if (props.type === 'CONTACT') {
		return 'reach out to me';
	} else if (props.type === 'COLLECTIONS') {
		return 'see my images';
	} else if (props.type === 'ADMIN') {
		return 'admin only';
	} else if (props.type === 'INSTAGRAM') {
		return 'instagram';
	} else if (props.type === 'CONTACT_EMAIL') {
		return 'click, send me a gmail';
	} else {
		return 'Click Away';
	}
};

const OverlayDisplay = props => {
	return (
		<OverlayTrigger
			placement='bottom'
			overlay={
				<Tooltip id='tooltip-bottom'>
					<div>{renderText(props)}</div>
				</Tooltip>
			}
		>
			{props.children}
		</OverlayTrigger>
	);
};

export default OverlayDisplay;
