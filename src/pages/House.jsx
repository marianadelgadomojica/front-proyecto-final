import React from 'react'
import Historic from '../components/Historic'
import Power from '../components/Power'
import PowerFactor from '../components/PowerFactor'

const House = () => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '300px',
                    alignItems: 'center',
                    margin: '20px',
                    paddingTop: '20px'
                }}
            >
                <div>
                    <Power />
                </div>
                <div>
                    <PowerFactor />
                </div>
            </div>
            <Historic />
        </div>
    )
}

export default House
