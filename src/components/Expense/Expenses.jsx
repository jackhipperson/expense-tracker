import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2023')

    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p className="p-10 text-center text-white text-xl">No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = (filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} item={expense.item} amount={expense.amount} date={expense.date} />)))
    }

    return (
        <div className="p-2 rounded-xl w-[50rem] max-w-[95%] bg-[#3A405A] m-2 mx-auto shadow-lg">
            <ExpenseFilter selected={filteredYear} onSelectYear={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            {expensesContent}
        </div>
    )
}

export default Expenses;