import "./App.css";
import React, { useState } from "react";
import ExpensesComponents from "./Components/Expenses/ExpensesComponents";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExp/NewExpense";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expense, setExpenses] = useState(Dummy_Expenses);
  const AddNewExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  
  };
  return (
    <div className="wrapper">
      <NewExpense onAddNewExpense={AddNewExpense} />
      <Card className="items-wrapper">
        <ExpensesComponents item={expense} />
      </Card>
    </div>
  );
};

export default App;
