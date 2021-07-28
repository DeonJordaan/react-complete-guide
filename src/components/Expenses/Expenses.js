import React, { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [chosenYear, setChosenYear] = useState('2019');

	const selectYearHandler = (selectedYear) => {
		setChosenYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === chosenYear
	})

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={chosenYear}
					onYearSelection={selectYearHandler}
				/>
				{filteredExpenses.map(expense => (
					<ExpenseItem 
						key={expense.id}
						title={expense.title} 
						amount={expense.amount} 
						date={expense.date} 
					/>
				))}
				
			</Card>
		</div>
	);
};

export default Expenses;
