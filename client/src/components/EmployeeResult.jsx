import './EmployeeResult.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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