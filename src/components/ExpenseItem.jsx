import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return (
        <div class="flex justify-between items-center shadow-md p-2 my-4 mx-0 rounded-xl bg-[#99B2DD]">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div class="flex flex-row gap-4 items-end justify-end flex-1">
                <p class="mx-4 text-xl flex-1 border-2 p-2 border-transparent">{props.item}</p>
                <div class="border-solid border-2 border-white p-2 rounded-xl text-xl font-bold bg-[#709775]">£{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;