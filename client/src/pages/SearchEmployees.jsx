import './SearchEmployees.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function SearchEmployees() {
    // Used for previous page
    const navigate = useNavigate();
    // Employee variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [salaryMin, setSalaryMin] = useState(0);
    const [salaryMax, setSalaryMax] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div>
            <Link to={`/`}>
                <Button>Home</Button>
            </Link>
            <div id='employeeForm'>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlID='firstName'>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlID='lastName'>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlID='position'>
                    <Form.Label>Position:</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group controlID='salaryMin'>
                    <Form.Label>Salary Min:</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Form.Group controlID='salaryMax'>
                    <Form.Label>Salary Max:</Form.Label>
                    <Form.Control type="text"  />
                </Form.Group>
                <Button variant='success' type='submit' className='mt-4'>
                    Search
                </Button>
            </Form>
        </div>
        </div>
    )
}

export default SearchEmployees;