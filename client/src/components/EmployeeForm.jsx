import './EmployeeForm.css';
import { useState } from 'react';
import EmployeeDataService from '../services/employee.service';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';

 
function EmployeeForm() {
    // Used for navigation
    const navigate = useNavigate();
    // Employee variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState(0);
    
    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeDataService.addEmployee(firstName, lastName, position, salary);
        navigate('/employees');
    }

    return(
        <div id='employeeForm'>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Form.Group as={Col} controlID='firstName'>
                        <Form.Control type="text" placeholder='First Name' className='textarea' onChange={(e) => setFirstName(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group as={Col} controlID='lastName'>
                        <Form.Control type="text" placeholder='Last Name' className='textarea' onChange={(e) => setLastName(e.target.value)} required/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} xs={9} controlId="position" className='mt-4 mb-4'>
                        <Form.Select className='fw-bold' onChange={e => setPosition(e.target.value)}>
                            <option value="none" selected disabled hidden>Select an Position</option>
                            <option>Cashier</option>
                            <option>Chef</option>
                            <option>Waiter</option>
                            <option>Janitor</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlID='salary' className='mb-3'>
                        <div id='employeeSalary' className='input-group mb-3'>
                            <span class="input-group-text">$</span>
                            <Form.Control type="number" placeholder='Salary' onChange={(e) => setSalary(e.target.value)} required/>
                        </div>
                    </Form.Group>
                </Row>
                <Button variant='outline-primary fw-bold' type='submit' className='mt-4'>
                    Add Employee
                </Button>
            </Form>
        </div>
    );
}

export default EmployeeForm;