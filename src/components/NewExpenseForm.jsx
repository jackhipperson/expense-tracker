import { useState } from "react";

function NewExpenseForm(props) {

    const [newExpense, setNewExpense] = useState({
        item: "",
        amount: "",
        date: ""
    })

    function inputHandler(identifier, value) {
        setNewExpense(prevState => {
            if (identifier === 'item') {
                return {
                    ...prevState,
                    item: value
                }
            } else if (identifier === 'amount') {
                return {
                    ...prevState,
                    amount: value
                }
            } else if (identifier === 'date') {
                return {
                    ...prevState,
                    date: value
                }
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        const expenseData = {
            item: newExpense.item,
            amount: newExpense.amount,
            date: new Date(newExpense.date)
            }
        props.onSaveExpenseData(expenseData);
        setNewExpense({
            item: "",
            amount: "",
            date: ""
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-wrap text-left mt-4">
                <div className="basis-1/2 gap-4 text-left mb-4">
                    <label className="block text-white text-xl">Item</label>
                    <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="text" value={newExpense.item} onChange={(event) => inputHandler('item', event.target.value)} />
                </div>
                <div className="basis-1/2 gap-4 text-left mb-4">
                    <label className="block text-white text-xl">Amount</label>
                    <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="number" min="0.01" step="0.01" value={newExpense.amount} onChange={(event) => inputHandler('amount', event.target.value)} />
                </div>
                <div className="basis-1/2 gap-4 text-left mb-4">
                    <label className="block text-white text-xl">Date</label>
                    <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="date" min="2020-01-01" max="2023-12-31" value={newExpense.date} onChange={(event) => inputHandler('date', event.target.value)} />
                </div>
            </div>
            <div className="text-right">
                <button className="border-solid border-2 border-white p-2 mx-4 rounded-xl text-xl font-bold bg-[#709775] hover:bg-[#56765A]" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default NewExpenseForm;