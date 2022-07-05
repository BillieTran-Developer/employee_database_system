import './EmployeeResult.css';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import EmployeeItem from './EmployeeItem';

function EmployeeResult({employeeList, deleteEmployee}) {
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
                    <th>
                        <Link to={`/add`}>
                            <Button variant='success' size='sm'>+</Button>
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    // Loading employees from list
                    employeeList.map(
                        employee => { return <EmployeeItem key={employee.id} employee={employee} deleteEmployee={deleteEmployee}/>}
                    )
                }
            </tbody>
        </Table>
    )
}

export default EmployeeResult;