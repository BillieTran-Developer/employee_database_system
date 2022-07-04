import './EditEmployeeForm.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeDataService from '../services/employee.service.js'
import { Form, Button } from 'react-bootstrap';

 
function EditEmployeeForm({employee}) {
    // Used for params
    const params = useParams();
    // Retreive employeId param from URL
    const id = params.employeeId;
    // Employee
    const [editEmployee, setEditEmployee] = useState();
    const [employeeLoaded, setEmployeeLoaded] = useState(false);
    // Edited Employee variables
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');
    const [editPosition, setEditPosition] = useState('');
    const [editSalary, setEditSalary] = useState(0);
    
    useEffect(() => {
        (async () => {
            // Set load state
            setEmployeeLoaded(false);
            // Set employee to be edited
            let res = await EmployeeDataService.getEmployee(id);
            console.log('useEffect',res)
            if (res) {
                // Set employee data
                setEditEmployee(res.data);
                // Set load state
                setEmployeeLoaded(true);
            }
        })();      
    }, []);

    return(
        <div id='editEmployeeForm'>
            { employeeLoaded && (
                <Form>
                <Form.Group controlID='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" value={`${editEmployee[0].first_name}`} onChange={(e) => setEditFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" value={`${editEmployee[0].last_name}`} onChange={(e) => setEditLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='position'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control type="text" value={`${editEmployee[0].position}`} onChange={(e) => setEditPosition(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='salary'>
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text" value={`${editEmployee[0].salary}`}  onChange={(e) => setEditSalary(e.target.value)} required/>
                </Form.Group>
                <Button variant='success' type='submit' className='mt-4' onClick={() => EmployeeDataService.updateEmployee(id, editLastName, editFirstName, editPosition, editSalary)}>
                    Edit Employee
                </Button>
            </Form>
            )}
        </div>
    );
}

export default EditEmployeeForm;