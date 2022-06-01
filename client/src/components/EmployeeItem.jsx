import './EmployeeItem.css';
import { Button } from 'react-bootstrap';

function EmployeeItem({employee}) {
    // Deconstructed employee object
    const {
        id, 
        last_name: lastName, 
        first_name: firstName, 
        position, 
        salary
    } = employee;
    
    return(
        // Individual employee row
        <tr key={id}>
            <td>{`${id}`}</td>
            <td>{`${lastName}`}</td>
            <td>{`${firstName}`}</td>
            <td>{`${position}`}</td>
            <td>{`$${salary}`}</td>
            <td><Button variant='secondary' size='sm'>Edit</Button></td>
            <td><Button variant='danger' size='sm'>X</Button></td>
        </tr>
    )
}

export default EmployeeItem