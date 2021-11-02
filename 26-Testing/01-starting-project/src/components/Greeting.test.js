import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
	test('renders "Hello Wereld!" as a text', () => {
		// Arrange
		render(<Greeting />);

		// Act
		//...nothing

		// Assert
		const helloWorldElement = screen.getByText('Hello Wereld!', {
			exact: true,
		});
		expect(helloWorldElement).toBeInTheDocument();
	});

	test('renders "Dis goed om jou te sien!" if the button was NOT clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		//...nothing

		// Assert
		const outputElement = screen.getByText('Dis goed om jou te sien!');
		expect(outputElement).toBeInTheDocument();
	});

	test('render "VERANDERING!" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act - click the button
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.getByText('VERANDERING!');
		expect(outputElement).toBeInTheDocument();
	});

	test('do NOT render "Dis goed om jou te sien!" if the button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act - click the button
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		// Assert
		const outputElement = screen.queryByText('Dis goed om jou te sien!');
		expect(outputElement).toBeNull();
	});
});
