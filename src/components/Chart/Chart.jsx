import ChartBar from "./ChartBar";

function Chart(props) {

    const dataPointValues = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="flex justify-around rounded-xl p-2 h-40 bg-[#A8AEC7] m-2 mx-auto shadow-lg">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;