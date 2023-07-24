

function ExpenseDate(props) {

    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const month = props.date.toLocaleString('en-US', { month: 'short' })
    const year = props.date.getFullYear()

    return (
        <div class="flex flex-col w-24 h24 border-2 bg-[#709775] border-white rounded-xl align-middle items-center justify-center">
            <div class="text-3xl bold">{day}</div>
            <div class="">{month}</div>
            <div class="">{year}</div>
        </div>
    )

}

export default ExpenseDate;