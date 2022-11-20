import React, { useState } from 'react'
import Chart from './Chart'

const PowerFactor = () => {
    const [pwFactor, setPwFactor] = useState(0.5)
    return (
        <div>
            <h2>Power Factor</h2>
            <div className="box bg-primary rounded text-white">
                <p>pwFactor = {pwFactor}</p>
            </div>
            <Chart label={'Power Factor'} value={pwFactor} />
        </div>
    )
}

export default PowerFactor
