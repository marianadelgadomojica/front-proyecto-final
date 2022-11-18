import React, from 'react'


const HomeSingleData = ({ props }) => {

    return (
        <div>
            <div key={props.seqno}> { props.ascii[0] } { props.ascii[1] }
            </div>
        </div>
    )
}

export default HomeSingleData
