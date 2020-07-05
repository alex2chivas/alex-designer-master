import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';

import FormDisplay from './Form';
import { createPost } from '../../actions/postsActions';

const NewPost = (props) => {
	const onSubmit = (formValues) => {
		props.createPost(formValues);
	};

	if (props.loginStatus) {
		return <FormDisplay onSubmit={onSubmit} />;
	}
	return (
		<Container style={{ height: '90vh' }}>
			<Row className="error-msg-wrapper">
				<Col xs="auto">
					<div>
						<h2>Error Please return to Collections</h2>
					</div>
				</Col>
				<Col xs="auto">
					<h3>
						<NavLink to="/design/collection">Click me to head back</NavLink>
					</h3>
				</Col>
			</Row>
		</Container>
	);
};

const mapStateToProps = (state) => {
	return { loginStatus: state.firebase.auth.uid };
};

export default connect(mapStateToProps, { createPost })(NewPost);
