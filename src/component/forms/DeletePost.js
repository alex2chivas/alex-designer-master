import React from 'react';
import { Container, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deletePost } from '../../actions/postsActions';
import ModalDisplay from '../react-bootstrap/Modal';
import history from '../../history';

const DeletePost = (props) => {
	const id = props.match.params.id;

	const onDelete = (id) => {
		props.deletePost(id);
	};

	const renderActions = () => {
		return (
			<React.Fragment>
				<Col>
					<Button variant="danger" onClick={() => onDelete(id)}>
						Delete
					</Button>
				</Col>
				<Col>
					<NavLink to="/design/collection">Cancel</NavLink>
				</Col>
			</React.Fragment>
		);
	};

	const renderContent = () => {
		if (props.collection) {
			return `Are you sure you want to delete the content with the title: ${props.collection.title}`;
		} else {
			return 'Are you sure you want to delete the content?';
		}
	};

	return (
		<Container style={{ height: '100vh' }}>
			<ModalDisplay
				title="Delete Post"
				content={renderContent()}
				actions={renderActions()}
				onDismiss={() => history.push('/design/collection')}
			/>
		</Container>
	);
};

const mapStateToprops = (state, OwnProps) => {
	const collection = state.firestore.data.collections;
	const id = OwnProps.match.params.id;
	const selectedCollection = collection && id ? collection[id] : null;

	return {
		loginStatus: state.firebase.auth.uid,
		collection: selectedCollection
	};
};

export default connect(mapStateToprops, { deletePost })(DeletePost);
