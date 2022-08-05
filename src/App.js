import "./App.css";
import ExpensesComponents from "./Components/Expenses/ExpensesComponents";
import Card from "./Components/UI/Card";
import NewExpense from './Components/NewExp/NewExpense';
const App = () => {
  const expense = [
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
  return (
    <div className="wrapper">
      <NewExpense />
    <Card className="items-wrapper">
      <ExpensesComponents item={expense}></ExpensesComponents>
     
    </Card>
    </div>
  );
}

export default App;
