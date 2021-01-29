import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postsActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import Spinner from '../react-bootstrap/Spinner';

const Collection = React.memo((props) => {
	useEffect(() => {
		props.fetchPost(props.match.params.id);
	});

	if (props.collection) {
		return (
			<Container fluid className="collection-container">
				<Row xs="auto" className="collection-image-wrapper">
					<Col xs="auto" md={{ span: 8, offset: 2 }} xl={{ span: 8, offset: 2 }}>
						<Image src={props.collection.picture} className="collection-image" fluid />
					</Col>
				</Row>
				<Row className="collection-content-wrapper">
					<Col className="collection-title">{props.collection.title}</Col>
					<Col className="collection-description">{props.collection.description}</Col>
				</Row>
			</Container>
		);
	} else {
		return <Spinner />;
	}
});

const mapStateToProps = (state, ownState) => {
	const data = state.firestore.data.collections;
	const id = ownState.match.params.id;
	const selectedCollection = data && id ? data[id] : null;
	return {
		collection: selectedCollection
	};
};

export default compose(connect(mapStateToProps, { fetchPost }), firestoreConnect([ { collection: 'collections' } ]))(
	Collection
);
