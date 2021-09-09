import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}

	componentDidCatch(error) {
		console.log(error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <p>Iets is nie lekker nie!</p>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
