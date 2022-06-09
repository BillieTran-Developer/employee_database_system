import './EditEmployeeForm.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { Form, Button } from 'react-bootstrap';

 
function EditEmployeeForm({employee}) {
    // Used for redirect
    const navigate = useNavigate();
    // Used for params
    const params = useParams();
    // Retreive employeId param from URL
    const id = params.employeeId;
    // Employee variables
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');
    const [editPosition, setEditPosition] = useState('');
    const [editSalary, setEditSalary] = useState(0);
    
    // Update employee
    const updateEmployee = async (id) => {
        //e.preventDefault();
        // Edited employee object
        const editedEmployee = {
            lastName : editLastName,
            firstName : editFirstName,
            position : editPosition,
            salary : editSalary,
            id
        }
        // MySQL Connection
        try {
            await Axios.put(`http://localhost:3001/update`, editedEmployee);
        } catch(err) {
            console.log(err)
        }
        // Redirect back to employee list
        //navigate(`/employees`)
    }
    
    console.log(employee.first_name)
    console.log(id);
    return(
        <div id='editEmployeeForm'>
            <Form>
                <Form.Group controlID='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEditFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" onChange={(e) => setEditLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='position'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setEditPosition(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlID='salary'>
                    <Form.Label>Salary:</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setEditSalary(e.target.value)} required/>
                </Form.Group>
                <Button variant='success' type='submit' className='mt-4' onClick={() => updateEmployee(id)}>
                    Edit Employee
                </Button>
            </Form>
        </div>
    );
}

export default EditEmployeeForm;