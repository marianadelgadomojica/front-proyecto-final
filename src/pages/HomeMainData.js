import React from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Chart from '../components/Chart'
import HomeSingleData from './HomeSingleData'

const HomeMainData = ({ props }) => {
    console.log(props.main.ascii[0].split('='))
    return (
        <div>
            <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                <div className="flex">
                    <div className="flex flex-column">
                        <h2>Power Watt</h2>
                        <Button variant="primary" size="lg">
                            {props.main.ascii[0]}
                        </Button>{' '}
                        <Chart
                            label={props.main.ascii[0].split('=')[0]}
                            value={+props.main.ascii[0].split('=')[1]}
                        />
                    </div>
                    <div>
                        <h2>Power Factor</h2>
                        <Button variant="primary" size="lg">
                            {props.main.ascii[1]}
                        </Button>
                        <Chart
                            label={props.main.ascii[1].split('=')[0]}
                            value={+props.main.ascii[1].split('=')[1]}
                        />
                    </div>
                </div>
                <div
                    style={{
                        width: '85%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderCollapse: 'collapse',
                        marginTop: '10px'
                    }}
                >
                    <details>
                        <summary>
                            <h2 style={{ display: 'inline' }}> HISTORICOS </h2>
                        </summary>
                        <div>
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                    {props.data.map((obj, index) => (
                                        <tr key={index}>
                                            <td>
                                                <HomeSingleData
                                                    props={obj}
                                                    key={index}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default HomeMainData
