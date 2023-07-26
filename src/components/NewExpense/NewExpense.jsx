import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {

    function saveExpenseData(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    

    return (
        <div className="p-4 rounded-xl w-[50rem] max-w-[95%] bg-[#82816D] m-2 mx-auto shadow-lg">
            <NewExpenseForm onSaveExpenseData={saveExpenseData} />
        </div>
    )
}

export default NewExpense;