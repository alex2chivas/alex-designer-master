import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Spinner from '../react-bootstrap/Spinner';
import ImageCard from '../react-bootstrap/ImageCard';

const renderNavLinkEdit = (collection, login) => {
	return login && <NavLink to={`/design/edit/${collection.id}`}>edit</NavLink>;
};

const renderNavLinkDelete = (collection, login) => {
	return login && <NavLink to={`/design/delete/${collection.id}`}>Delete</NavLink>;
};

const CollectionList = ({ collections, login }) => {
	const renderContent = () => {
		return collections.map((collection) => {
			return (
				<React.Fragment key={collection.id}>
					<Col xs={12} md={6} lg={6} className="image-text-content">
						<ImageCard
							id={collection.id}
							title={collection.title}
							description={collection.description}
							picture={collection.picture}
							onEdit={renderNavLinkEdit(collection, login)}
							onDelete={renderNavLinkDelete(collection, login)}
							login={login}
						/>
					</Col>
				</React.Fragment>
			);
		});
	};

	if (collections) {
		return <React.Fragment>{renderContent()}</React.Fragment>;
	} else {
		return (
			<React.Fragment>
				<Spinner />
			</React.Fragment>
		);
	}
};

export default CollectionList;
