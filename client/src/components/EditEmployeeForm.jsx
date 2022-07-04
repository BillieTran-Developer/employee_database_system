import './EditEmployeeForm.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeDataService from '../services/employee.service.js'
import { Form, Button } from 'react-bootstrap';

 
function EditEmployeeForm({employee}) {
    // Used for params
    const params = useParams();
    // Used for navigation
    const navigate = useNavigate();
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
                const employee = res.data[0]
                setEditEmployee(employee);
                setEditFirstName(employee.first_name);
                setEditLastName(employee.last_name);
                setEditPosition(employee.position);
                setEditSalary(employee.salary);
                // Set load state
                setEmployeeLoaded(true);
            }
        })();      
    }, []);
    
        // Submit Handler
        const handleSubmit = (e) => {
            e.preventDefault();
            EmployeeDataService.updateEmployee(id, editLastName, editFirstName, editPosition, editSalary);
            navigate('/employees');
        }

    return(
        <div id='editEmployeeForm'>
            { employeeLoaded && (
                <Form onSubmit={handleSubmit}>
                <Form.Group controlID='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" value={editFirstName} onChange={(e) => setEditFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" value={editLastName} onChange={(e) => setEditLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='position'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control type="text" value={editPosition} onChange={(e) => setEditPosition(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='salary'>
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text" value={editSalary} onChange={(e) => setEditSalary(e.target.value)} required/>
                </Form.Group>
                <Button variant='success' type='submit' className='mt-4'>
                    Edit Employee
                </Button>
            </Form>
            )}
        </div>
    );
}

export default EditEmployeeForm;