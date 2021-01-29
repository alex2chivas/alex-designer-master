import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import CollectionList from './CollectionList';

const Collections = (props) => {
	const renderCollectionList = () => {
		return (
			<Row className="collectionlist-wrapper">
				<CollectionList login={props.loginStatus} collections={props.collections} />
			</Row>
		);
	};

	if (props.loginStatus) {
		return (
			<Container className="collections-container" fluid>
				{renderCollectionList()}
				<NavLink to="/design/new">Make new</NavLink>
			</Container>
		);
	} else {
		return <Container className="collections-container">{renderCollectionList()}</Container>;
	}
};

const mapStateToProps = (state) => {
	return {
		loginStatus: state.firebase.auth.uid,
		collections: state.firestore.ordered.collections
	};
};
export default compose(
	connect(mapStateToProps),
	firestoreConnect([ { collection: 'collections', orderBy: [ 'time', 'desc' ] } ])
)(Collections);
