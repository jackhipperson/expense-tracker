function ExpenseFilter(props) {

    function dropdownChangeHandler(event) {
        props.onSelectYear(event.target.value)
    }

    return (
        <div className="grid grid-cols-2 pt-2 mb-4">
            <label className=" text-white text-xl pl-2" >Filter by year:</label>
            <select className="w-36 rounded-md pr-2 text-xl h-8 justify-self-end text-center" value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;