import React from 'react';

const PreviewPicture = props => {
	const { pictureUrl } = props;
	return <img alt='Preview' src={pictureUrl} style={{ width: '125px', height: '100px' }} />;
};

export default PreviewPicture;
