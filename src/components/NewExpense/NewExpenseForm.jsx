import { useState } from "react";

function NewExpenseForm(props) {

    const [newExpense, setNewExpense] = useState({
        item: "",
        amount: "",
        date: ""
    })

    const [isEditing, setIsEditing] = useState(false)

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
            amount: +newExpense.amount,
            date: new Date(newExpense.date)
        }
        props.onSaveExpenseData(expenseData);
        setNewExpense({
            item: "",
            amount: "",
            date: ""
        })
    }

    function handleAddClick() {
        setIsEditing(true)
    }

    function handleCloseClick() {
        setIsEditing(false)
    }

    return (
        <div>
            {isEditing ? (
                <form onSubmit={submitHandler}>
                    <div className="flex flex-wrap text-left mt-4">
                        <div className="basis-1/2 gap-4 text-left mb-4">
                            <label className="block text-white">Item</label>
                            <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="text" value={newExpense.item} onChange={(event) => inputHandler('item', event.target.value)} />
                        </div>
                        <div className="basis-1/2 gap-4 text-left mb-4">
                            <label className="block text-white">Amount</label>
                            <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="number" min="0.01" step="0.01" value={newExpense.amount} onChange={(event) => inputHandler('amount', event.target.value)} />
                        </div>
                        <div className="basis-1/2 gap-4 text-left mb-4">
                            <label className="block text-white">Date</label>
                            <input className="w-[95%] rounded-lg h-8 pl-2 pr-2" type="date" min="2020-01-01" max="2023-12-31" value={newExpense.date} onChange={(event) => inputHandler('date', event.target.value)} />
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="border-solid border-2 border-white p-2 mr-4 rounded-xl font-bold bg-[#709775] hover:bg-[#56765A]" type="submit">Submit</button>
                        <button className="border-solid border-2 border-white p-2 mr-4 rounded-xl font-bold bg-[#709775] hover:bg-[#56765A]" onClick={handleCloseClick}>Close</button>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col items-center">
                    <button className="w-3/6 border-solid border-2 border-white p-2 mx-4 rounded-xl font-bold bg-[#709775] hover:bg-[#56765A]" type="submit" onClick={handleAddClick} >Add Expense Item</button>
                </div>
            )
            }
        </div>
    )
}

export default NewExpenseForm;