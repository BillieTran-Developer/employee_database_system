import './EditEmployeeForm.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeDataService from '../services/employee.service.js'
import { Form, Button, Col, Row } from 'react-bootstrap';

 
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
                    <Row>
                        <Form.Group as={Col} controlID='firstName'>
                            <Form.Control type="text" placeholder='First Name' value={editFirstName} className='textarea' onChange={(e) => setEditFirstName(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group as={Col} controlID='lastName'>
                            <Form.Control type="text" placeholder='Last Name' value={editLastName} className='textarea' onChange={(e) => setEditLastName(e.target.value)} required/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={9} controlId="position" className='mt-4 mb-4'>
                            <Form.Select className='fw-bold'>
                                <option>Cashier</option>
                                <option>Chef</option>
                                <option>Waiter</option>
                                <option>Janitor</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} controlID='salary' className='mb-3'>
                        <div id='editEmployeeSalary' className='input-group mb-3'>
                            <span class="input-group-text">$</span>
                            <Form.Control type="number" placeholder='Salary' value={editSalary} onChange={(e) => setEditSalary(e.target.value)} required/>
                        </div>
                        </Form.Group>
                    </Row>
                    <Button variant='outline-warning fw-bold' type='submit' className='mt-4'>
                        Add Employee
                    </Button>
                </Form>
            )}
        </div>
    );
}

export default EditEmployeeForm;