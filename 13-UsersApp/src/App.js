import UserFinder from './components/UserFinder';
import UsersContext from './Store/users-context';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

function App() {
	const usersContext = {
		users: DUMMY_USERS,
	};

	return (
		<UsersContext.Provider value={usersContext}>
			<UserFinder />
		</UsersContext.Provider>
	);
}

// Pre-Context Code - Lecture 168
// import UserFinder from './components/UserFinder';

// function App() {
// 	return (
// 		<div>
// 			<UserFinder />
// 		</div>
// 	);
// }

export default App;
