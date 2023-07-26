

function ChartBar(props) {

    let fillHeight = '0%'
    if (props.maxValue > 0) {
        fillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }

    return (
        <div className="flex flex-col h-[100%] align-middle items-center">
            <div className="flex flex-col h-[100%] w-5 border-2 border-solid border-[#313131] rounded-full bg-[#FAF3DD] overflow-hidden justify-end">
                <div className="bg-[#3A405A] w-[100%] bottom-0 transition-all duration-300 ease-out" style={{ height: fillHeight }}>
                </div>
            </div>
            <div className="flex flex-col text-2 bold">
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar;