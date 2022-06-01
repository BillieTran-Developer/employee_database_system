import './EmployeeResult.css';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import EmployeeItem from './EmployeeItem';

function EmployeeResult({employeeList}) {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th></th>
                    <Link to={`/add`}>
                        <th><Button variant='success' size='sm'>+</Button></th>
                    </Link>
                </tr>
            </thead>
            <tbody>
                {
                    // Loading employees from list
                    employeeList.map(
                        employee => { return <EmployeeItem key={employee.id} employee={employee}/>}
                    )
                }
            </tbody>
        </Table>
    )
}

export default EmployeeResult;