// import Todo from '../models/todo'; Not required, see below note

import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
	text: string;
	onRemoveTodo: (event: React.MouseEvent) => void; //The event definition is not actually required, since we won't be using it
}> = (props) => {
	return (
		<li className={classes.item} onClick={props.onRemoveTodo}>
			{props.text}
		</li>
	);
};

//NOTE My slightly more complex solution. Do not need the WHOLE Todo component as a type, only the text: string
// const TodoItem: React.FC<Todo> = (props) => {
// 	return <li id={props.id}>{props.text}</li>;
// };

export default TodoItem;
