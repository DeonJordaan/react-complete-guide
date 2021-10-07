import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
	const [tasks, setTasks] = useState([]);

	const { isLoading, error, sendRequest: fetchTasks } = useHttp();

	// Save this line by moving this destructuring to the line above
	// const { isLoading, data, sendRequest } = httpData;

	useEffect(() => {
		const transformTasks = (tasksObject) => {
			const loadedTasks = [];

			for (const taskKey in tasksObject) {
				loadedTasks.push({
					id: taskKey,
					text: tasksObject[taskKey].text,
				});
			}

			setTasks(loadedTasks);
		};

		fetchTasks(
			{
				url: 'https://react-http-37831-default-rtdb.firebaseio.com/tasks.json',
			},
			transformTasks
		);
	}, [fetchTasks]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={fetchTasks}
			/>
		</React.Fragment>
	);
}

export default App;

//Old fetchTasks function, FYI
// const fetchTasks = async (taskText) => {
// 	setIsLoading(true);
// 	setError(null);
// 	try {
// 		const response = await fetch(
// 			'https://react-http-37831-default-rtdb.firebaseio.com/tasks.json'
// 		);

// 		if (!response.ok) {
// 			throw new Error('Request failed!');
// 		}

// 		const data = await response.json();

// 		const loadedTasks = [];

// 		for (const taskKey in data) {
// 			loadedTasks.push({ id: taskKey, text: data[taskKey].text });
// 		}

// 		setTasks(loadedTasks);
// 	} catch (err) {
// 		setError(err.message || 'Something went wrong!');
// 	}
// 	setIsLoading(false);
// };
