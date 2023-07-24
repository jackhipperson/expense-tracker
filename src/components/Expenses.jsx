import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    
    return (
        <div class="p-2 rounded-xl w-[50rem] max-w-[95%] bg-[#3A405A] m-2 mx-auto">
            <ExpenseItem item={props.expenses[0].item} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem item={props.expenses[1].item} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem item={props.expenses[2].item} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenseItem item={props.expenses[3].item} amount={props.expenses[3].amount} date={props.expenses[3].date} />
        </div>
    )
}

export default Expenses;