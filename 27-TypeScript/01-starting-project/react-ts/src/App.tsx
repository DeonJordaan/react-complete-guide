import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
	const todos = [new Todo('Leer Reaksie'), new Todo('Leer TipeSkrif')];

	return (
		<div>
			<Todos items={todos} />
		</div>
	);
}

export default App;
