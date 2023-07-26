import { useState } from "react";
import Expenses from "./components/Expense/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1', item: 'Toilet Paper', amount: 100.20, date: new Date(2023, 7, 22)
  }, {
    id: 'e2', item: 'Hand Soap', amount: 24.20, date: new Date(2022, 9, 22)
  }, {
    id: 'e3', item: 'Dish Soap', amount: 47.62, date: new Date(2021, 7, 20)
  }, {
    id: 'e4', item: 'Plant', amount: 18.50, date: new Date(2023, 10, 10)
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  function addExpenseHandler(expense) {
    setExpenses(prevItems => {
      return [expense, ...prevItems]
    });
  }

  return (
    <div>
      <p className="text-center text-3xl m-4">Expense Tracker</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
