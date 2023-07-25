import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense"

function App() {

  const expenses = [
    {
      id: 'e1', item: 'Toilet Paper', amount: 100.20, date: new Date(2022, 7, 22)
    },{
      id: 'e2', item: 'Hand Soap', amount: 24.20, date: new Date(2022, 9, 22)
    },{
      id: 'e3', item: 'Dish Soap', amount: 47.62, date: new Date(2022, 7, 20)
    },{
      id: 'e4', item: 'Plant', amount: 18.50, date: new Date(2022, 10, 10)
    }
  ]

  function addExpenseHandler(expense) {
    console.log('in App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
