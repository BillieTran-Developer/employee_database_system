import './EmployeeForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';

 
function EmployeeForm() {
    // Employee variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState(0);

    // Used for redirect
    const navigate = useNavigate();

    // Add employee to MySQL database
    const addEmployee = async (e) => {
        e.preventDefault();
        // Employee object
        const employee = {
            firstName,
            lastName,
            position,
            salary
        }
        // MySQL connection
        try {
            const response = await Axios.post(`http://localhost:3001/add`, employee);
        } catch(err) {
            console.log(err);
        }
        navigate(`/employees`)
    }

    return(
        <div id='employeeForm'>
            <Form onSubmit={addEmployee}>
                <Form.Group controlID='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='position'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setPosition(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='salary'>
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setSalary(e.target.value)} required/>
                </Form.Group>
                <Button variant='success' type='submit' className='mt-4'>
                    Add Employee
                </Button>
            </Form>
        </div>
    );
}

export default EmployeeForm;