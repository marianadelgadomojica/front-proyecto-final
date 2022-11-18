import React from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
                    {/* <DropdownButton
                        align={{ lg: 'end' }}
                        title="HISTORICOS."
                        id="dropdown-menu-align-responsive-1"
                        >
                        <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                    </DropdownButton> */}
                </div>
            </div>
        </div>

        
    )
}

export default HomeMainData