import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput, renderTextArea, FileField } from './renderTypes';
import { Container, Row, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const FormDisplay = React.memo(props => {
	const onSubmit = formValues => {
		props.onSubmit(formValues);
	};

	const renderPictureField = () => {
		if (props.type === 'EDIT_POST') {
			return (
				<Field
					name='picture'
					picture={props.initialValues.picture}
					component={FileField}
					label='Add Image'
					type={props.type}
				/>
			);
		} else {
			return <Field name='picture' component={FileField} label='Add Image' />;
		}
	};

	return (
		<Container fluid className='fields-wrapper'>
			<Row className='justify-content-around'>
				<Form onSubmit={props.handleSubmit(onSubmit)}>
					<Form.Group controlId='titleGroup'>
						<Field name='title' type='text' component={renderInput} label='Enter Title' />
					</Form.Group>
					<Form.Group controlId='descriptionGroup'>
						<Field
							name='description'
							type='text'
							component={renderTextArea}
							label='Enter description'
						/>
					</Form.Group>
					<Form.Group controlId='imageGroup'>
						{renderPictureField()}
						<div className='btn-wrapper'>
							<Button block size='lg' type='submit'>
								Submit
							</Button>
						</div>
					</Form.Group>
				</Form>
			</Row>
		</Container>
	);
});

export default reduxForm({
	form: ' Form '
})(FormDisplay);
