import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpensesFilter>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;