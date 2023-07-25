

function ExpenseFilter(props) {

    function dropdownChangeHandler(event) {
        props.onSelectYear(event.target.value)
    }

    return (
        <div class="grid grid-cols-2 pt-2">
            <label class=" text-white text-2xl pl-2" >Filter by year:</label>
            <select class="w-3/6 rounded-md pr-2 text-2xl justify-self-end text-center" value={props.selected} onChange={dropdownChangeHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
    )
}

export default ExpenseFilter;