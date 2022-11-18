import React from 'react'
import Button from 'react-bootstrap/Button';

const HomeMainData = ({ props }) => {
    return (
        <div>
            <div style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>
                       
               
                <div>
                    
                    <Button variant="primary" size="lg">
                   {props.ascii[0]}
                    </Button>{' '}
                    <Button variant="primary" size="lg">
                     {props.ascii[1]}
                    </Button>
                </div>
                <div>
                        <Button> title="HISTORICOS"</Button>
                        
                        
                </div>
            </div>
        </div>

        
    )
}

export default HomeMainData
