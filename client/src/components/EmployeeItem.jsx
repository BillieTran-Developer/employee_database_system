import './EmployeeItem.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
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

     // Delete employee from database
     const deleteEmployee = async (id) => {
        try {
            await Axios.delete(`http://localhost:3001/delete/${id}`);
            // Reset employee list after employee deletion
            console.log(`Employee: ${id} succesfully deleted`);
        } catch(err) {
            console.log(err);
        }
    }
    
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