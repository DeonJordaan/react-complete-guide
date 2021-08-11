import React, { useState } from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [chosenYear, setChosenYear] = useState('2019');

	const selectYearHandler = (selectedYear) => {
		setChosenYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === chosenYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={chosenYear}
					onYearSelection={selectYearHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />;
			</Card>
		</div>
	);
};

export default Expenses;
