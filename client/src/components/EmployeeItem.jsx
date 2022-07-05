import './EmployeeItem.css';
import EmployeeDataService from '../services/employee.service';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function EmployeeItem({employee, deleteEmployee}) {
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
            <td>
                <Link to={`/edit/${id}`}>
                    <Button variant='secondary' size='sm'>Edit</Button>
                </Link>
            </td>
            <td><Button variant='danger' size='sm' onClick={() => deleteEmployee(id)}>X</Button></td>
        </tr>
    )
}

export default EmployeeItem