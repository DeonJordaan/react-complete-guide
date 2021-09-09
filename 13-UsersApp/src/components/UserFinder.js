import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';

import classes from './UserFinder.module.css';
import UsersContext from '../Store/users-context';
import ErrorBoundary from './ErrorBoundary';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
	static contextType = UsersContext;

	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: '',
		};
	}

	componentDidMount() {
		this.setState({ filteredUsers: this.context.users });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input
						type="search"
						onChange={this.searchChangeHandler.bind(this)}
					/>
				</div>
				<ErrorBoundary>
					<Users users={this.state.filteredUsers} />
				</ErrorBoundary>
			</Fragment>
		);
	}
}

// Replaced by class component
// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState('');

//Replaced by componentDidUpdate()
// useEffect(() => {
// 	setFilteredUsers(
// 		DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// 	);
// }, [searchTerm]);

// Replaced by searchChangeHandler() method
// const searchChangeHandler = (event) => {
// 	setSearchTerm(event.target.value);
// };

// Included inside render()
// return (
// 	<Fragment>
// 		<input type="search" onChange={searchChangeHandler} />
// 		<Users users={filteredUsers} />
// 	</Fragment>
// );
// };

export default UserFinder;
