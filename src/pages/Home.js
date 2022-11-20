import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeSingleData from './HomeSingleData'
import HomeMainData from './HomeMainData'
import Table from 'react-bootstrap/Table'

const Home = () => {
    const [data, setData] = useState([])
    const obtenerData = async () => {
        const res = await axios.get(`http://44.202.0.254:5000/api/v1/data`)
        const data = await res.data.data
        console.log(data)
        setData(data)
    }

    useEffect(() => {
        obtenerData()
    }, [])
    const main = data[0]
    return (
        <div>
            {data.map(
                (obj, index) =>
                    index === 0 && (
                        <div key={index}>
                            <br></br>
                            <h1>
                                {' '}
                                <HomeMainData
                                    props={{ main, data }}
                                    key={index}
                                />
                            </h1>
                            <br></br>
                        </div>
                    )
            )}
        </div>
    )
}

export default Home
