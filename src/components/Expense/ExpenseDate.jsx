

function ExpenseDate(props) {

    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const month = props.date.toLocaleString('en-US', { month: 'short' })
    const year = props.date.getFullYear()

    return (
        <div className="flex flex-col w-24 h24 border-2 bg-[#709775] border-white rounded-xl align-middle items-center justify-center">
            <div className="text-3xl bold">{day}</div>
            <div className="">{month}</div>
            <div className="">{year}</div>
        </div>
    )

}

export default ExpenseDate;