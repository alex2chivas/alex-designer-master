import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import FormDisplay from './Form';
import { editPost } from '../../actions/postsActions';

const EditPost = (props) => {
	const collection = props.collection;
	const id = props.match.params.id;

	const onSubmit = (formValues) => {
		props.editPost(id, formValues);
	};

	if (props.loginStatus && collection) {
		return (
			<React.Fragment>
				<FormDisplay
					onSubmit={onSubmit}
					initialValues={_.pick(collection, 'title', 'description', 'picture', 'time')}
					type="EDIT_POST"
				/>
			</React.Fragment>
		);
	}
	return (
		<Container size="sm" style={{ height: '100vh', padding: '30px', textAlign: 'center' }}>
			<Row>
				<Col>
					<h2>Error Please return to home page</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<h2>
						<NavLink to="/design/collection">return to collections</NavLink>
					</h2>
				</Col>
			</Row>
		</Container>
	);
};

const mapStateToProps = (state, OwnProps) => {
	const collection = state.firestore.data.collections;
	const id = OwnProps.match.params.id;
	const selectedCollection = collection && id ? collection[id] : null;

	return {
		loginStatus: state.firebase.auth.uid,
		collection: selectedCollection
	};
};

export default connect(mapStateToProps, { editPost })(EditPost);
