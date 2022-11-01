import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES=[{id: "e1", title: "Book", amount: 14.12, date: new Date(2020, 7, 14)}, {id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)}, { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)}, {id: "e4", title: "New Desk", amount: 450, date: new Date(2021, 5, 12)}];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
