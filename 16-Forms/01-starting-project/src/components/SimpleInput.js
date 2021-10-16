import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHanlder,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHanlder,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));

	//NOTE Checking overall form validity the simpler way
	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	//NOTE Form Submission Handling
	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		resetNameInput();

		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangedHandler}
					onBlur={nameBlurHanlder}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text"> Name is not valid</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailChangedHandler}
					onBlur={emailBlurHanlder}
					value={enteredEmail}
				/>
				{emailInputHasError && (
					<p className="error-text"> Email is not valid</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;

//NOTE
// {!enteredNameIsValid ? <p>Name is not valid</p> : null} //I did this, which is not ideal. Better to follow the below example

///////////////
// nameInputRef.current.value = '' // NOTE MANUAL; DOM MANIPULATION = BAD PRACTICE
