import React, { useState } from 'react'
import Chart from './Chart'

function Power() {
    const [pw, setPw] = useState(0.3)

    return (
        <div>
            <h2>Power</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    gap: '20px'
                }}
            >
                <div className="box bg-primary rounded text-white">
                    <p>pw = {pw}</p>
                </div>
                <p>W</p>
            </div>
            <Chart label={'Power'} value={pw} />
        </div>
    )
}

export default Power
