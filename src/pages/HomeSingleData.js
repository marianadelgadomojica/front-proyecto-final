import React from 'react'

const HomeSingleData = ({ props }) => {
    return (
        <div key={props.seqno}>
            {' '}
            {props.ascii[0]} {props.ascii[1]}
        </div>
    )
}

export default HomeSingleData
