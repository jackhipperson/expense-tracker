import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    const [item, setItem] = useState(props.item)

    const clickHandler = (event) => {
        setTitle()
    }

    return (
        <div className="flex justify-between items-center shadow-md p-2 my-4 mx-0 rounded-xl bg-[#99B2DD]">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="flex flex-row gap-4 items-end justify-end flex-1">
                <p className="mx-4 text-xl flex-1 border-2 p-2 border-transparent">{item}</p>
                <div className="border-solid border-2 border-white p-2 rounded-xl text-xl font-bold bg-[#709775]">£{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Edit Name</button>
        </div>
    )
}

export default ExpenseItem;