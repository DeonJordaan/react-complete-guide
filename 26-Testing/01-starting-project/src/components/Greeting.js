import { useState } from 'react';

import Output from './Output';

const Greeting = () => {
	const [changedText, setChangedText] = useState(false);

	const changeTextHandler = () => {
		setChangedText(true);
	};

	return (
		<div>
			<h2>Hello Wereld!</h2>
			{!changedText && <Output>Dis goed om jou te sien!</Output>}
			{changedText && <Output>VERANDERING!</Output>}
			<button onClick={changeTextHandler}>Change Text</button>
		</div>
	);
};

export default Greeting;
