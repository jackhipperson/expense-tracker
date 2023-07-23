import React from "react";

function ExpenseItem() {

    const expenseDate = new Date(2021, 2, 28)

    return (
        <div class="flex justify-between items-center shadow-md p-2 my-4 mx-0 rounded-xl bg-[#99B2DD]">
            <div>March 21st 2020</div>
            <div class="flex flex-row gap-4 items-end justify-end flex-1">
                <p class="mx-4 text-base flex-1 border-2 p-2 border-transparent">Item</p>
                <div class="border-solid border-2 border-white p-2 rounded-xl text-base font-bold bg-[#3BB273]">Amount</div>
            </div>
        </div>
    )
}

export default ExpenseItem;