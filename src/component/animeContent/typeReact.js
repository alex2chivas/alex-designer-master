import React from 'react';
import Typed from 'typed.js';

class TypeReact extends React.Component {
	componentDidMount() {
		// If you want to pass more options as props, simply add
		// your desired props to this destructuring assignment.
		const { strings } = this.props;
		// You can pass other options here, such as typing speed, back speed, etc.
		const options = {
			startDelay: 500,
			strings: strings,
			typeSpeed: 70,
			fadeOut: true,
			fadeOutClass: 'typed-fade-out',
			fadeOutDelay: 1000,
			loop: true,
			loopCount: Infinity
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}

	componentWillUnmount() {
		// Make sure to destroy Typed instance on unmounting
		// to prevent memory leaks
		this.typed.destroy();
	}

	render() {
		return (
			<span
				ref={el => {
					this.el = el;
				}}
			/>
		);
	}
}

export default TypeReact;
