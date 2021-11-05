import React, { useContext } from 'react';

import { TodosContext } from '../store/todos-context';

import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext);

	return (
		<ul className={classes.todo}>
			{todosCtx.items.map((item) => (
				<TodoItem
					onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
					key={item.id}
					text={item.text}
				/>
				// <li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
};

export default Todos;
