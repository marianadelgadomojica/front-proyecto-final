import React from 'react'
import DonutChart from 'react-donut-chart'

function Chart({ label, value }) {
    return (
        <DonutChart
            data={[
                {
                    label,
                    value: value || 0,
                    isEmpty: false
                },
                {
                    label: '',
                    value: value > 0 ? 1 - value : 0,
                    isEmpty: true
                }
            ]}
            styles={{
                '.chart_text': {
                    fontSize: '1.5em',
                    fill: '#fff'
                }
            }}
            height={150}
            legend={false}
            width={150}
            colors={['#1497f2']}
            toggledOffset={0}
        />
    )
}

export default Chart
