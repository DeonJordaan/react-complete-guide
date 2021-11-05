import React, { useState } from 'react';
import Todo from '../models/todo';

type TodosContextObject = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHander = (todoText: string) => {
		const newTodo = new Todo(todoText);

		setTodos((currentTodos) => {
			// return currentTodos.concat(newTodo);
			return [...currentTodos, newTodo];
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== todoId);
		});
	};

	const contextValue: TodosContextObject = {
		items: todos,
		addTodo: addTodoHander,
		removeTodo: removeTodoHandler,
	};

	useState();

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
