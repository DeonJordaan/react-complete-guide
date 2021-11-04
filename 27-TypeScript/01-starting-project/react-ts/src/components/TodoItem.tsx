// import Todo from '../models/todo'; Not required, see below note

const TodoItem: React.FC<{ text: string }> = (props) => {
	return <li>{props.text}</li>;
};

//NOTE My slightly more complex solution. Do not need the WHOLE Todo component as a type, only the text: string
// const TodoItem: React.FC<Todo> = (props) => {
// 	return <li id={props.id}>{props.text}</li>;
// };

export default TodoItem;
