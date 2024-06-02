import ReactECharts from 'echarts-for-react';
function Grafico(){
    const config = {
        grid: {},
        xAxis: {
            type: 'category',
            data: [1,2,3,4,5,6,7,8],
            splitLine: {
                lineStyle: {
                    show: true,
                    color: "rgb(103,103,103)",
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name: 'Watts',
            splitLine: {
                lineStyle: {
                    color: "rgb(103,103,103)",
                    type: 'dashed'
                }
            }
        },
        series: {
            data: [10, 22, 28, 23, 19, 45, 12, 53],
            type: 'line',
            areaStyle: {},
            symbol: 'circle',
            symbolSize: 6,
            smooth: true
        }
    }
    return(
        <div>
            <ReactECharts option={config}/>
        </div>
    )
}
export default Grafico