import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import PreviewPicture from './PreviewPicture';

export const renderInput = ({ input, label, meta, type }) => {
	return (
		<React.Fragment>
			<Form.Label>{label}</Form.Label>
			<Form.Control {...input} type={type} autoComplete="off" placeholder={`${label}`} />
		</React.Fragment>
	);
};

export const renderTextArea = ({ input, label, meta, type }) => {
	return (
		<React.Fragment>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				as="textarea"
				{...input}
				type={type}
				autoComplete="off"
				placeholder={label}
				size="lg"
				style={{ height: '125px', width: '400px' }}
			/>
		</React.Fragment>
	);
};

export class FileField extends React.Component {
	constructor(state) {
		super(state);

		this.state = {
			picture: null,
			pictureUrl: null
		};
	}
	render() {
		const { label, input } = this.props;
		delete input.value;
		const editState = this.props.type === 'EDIT_POST';
		return (
			<React.Fragment>
				<Form.Label>{label}</Form.Label>
				<Row className="justify-content-around">
					<Col className="align-self-center">
						{editState ? (
							'Image can only be deleted from collections'
						) : (
							<input
								className="file-btn"
								type="file"
								{...input}
								onChange={(event) => {
									this.displayPicture(event);
								}}
							/>
						)}
					</Col>
					<Col className="align-self-center">
						<PreviewPicture pictureUrl={editState ? this.props.picture : this.state.pictureUrl} />
					</Col>
				</Row>
			</React.Fragment>
		);
	}

	displayPicture(event) {
		let reader = new FileReader();
		let file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				picture: file,
				pictureUrl: reader.result
			});
		};
		reader.readAsDataURL(file);
	}
}
