import React from 'react';
import { Container } from 'react-bootstrap';
import Display from './display';

import { rotateRoot } from '../animeContent/index';

const App = () => {
	return (
		<Container className='home-container'>
			<Display />
		</Container>
	);
};

export default App;
