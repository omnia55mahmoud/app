import ExpenseItem from "./ExpenseItem";
import React, { useState } from 'react';
import ExpensesFilter from "../FilterComponent/ExpensesFilter";
const ExpensesComponents = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandller = (Year) => {
    setFilteredYear(Year)
    console.log(Year);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandller} />
      {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
   
    </div>
  );
};
export default ExpensesComponents;
