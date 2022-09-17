import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id:'e1',
    date: new Date(2022, 2, 28),
    title: "Car Insurance",
    amount: 294.67,
  },
  {
    id:'e2',
    date: new Date(2019, 10, 3),
    title: "Toilet Paper",
    amount: 300,
  },
  {
    id:'e3',
    date: new Date(2008, 8, 15),
    title: "New Desk(Wooden)",
    amount: 456.98,
  },
  {
    id:'e4',
    date: new Date(2013, 5, 11),
    title: "New Tv",
    amount: 680.30,
  }
];
function App() {
  const [expenses,setExpenses]=useState(INITIAL_EXPENSES);

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenseItems={expenses}/>
    </div>
  );
}

export default App;
