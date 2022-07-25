import './SearchEmployees.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Button, Form, Tab, Tabs } from 'react-bootstrap';

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
        <div id='searchContainer'>
            <p className='fs-1 p-4 fw-bold'>Search Employees</p>
            <div id='searchFormContainer'>
                <Tabs defaultActiveKey='employeeName' justify>
                    <Tab eventKey='employeeName' title='Employee Name'>
                        <div id='searchNameForm' className='mt-5'>
                            <Form onSubmit={handleSubmit}>
                                <Row className='mb-3'>
                                    <Form.Group as={Col} controlID='firstName'>
                                        <Form.Control type="text" placeholder='First Name'/>
                                    </Form.Group>
                                    <Form.Group as={Col} controlID='lastName'>
                                        <Form.Control type="text" placeholder='Last Name'/>
                                    </Form.Group>
                                </Row>
                                <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </Tab>
                    <Tab eventKey='employeeSalary' title='Employee Salary'>
                        <div id='searchSalaryForm' className='mt-5'>
                            <div className='mb-5'>
                                <label for="salaryRange" class="form-label">Salary Min:</label>
                                <input type="range" class="form-range" id="salaryRange" min='0'></input>
                                <label for="salaryRange" class="form-label">Salary Max:</label>
                                <input type="range" class="form-range" id="salaryRange" min='0'></input>
                            </div>
                            <Form>
                                <Row>
                                    <Form.Group as={Col} controlID='salaryMin'>
                                            <div className='input-group mb-3'>
                                                <span class="input-group-text">$</span>
                                                <Form.Control type="number" placeholder='Min'/>
                                            </div>
                                        </Form.Group>
                                        <Form.Group as={Col} controlID='salaryMax'>
                                            <div className='input-group mb-3'>
                                                <span class="input-group-text">$</span>
                                                <Form.Control type="number" placeholder='Max'/>
                                            </div>
                                    </Form.Group>
                                </Row>
                                <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </Tab>
                    <Tab eventKey='employeePosition' title='Employee Position'>
                        <div id='searchPositionForm' className='mt-5'>
                            <Form>
                                <Form.Group controlID='position'>
                                    <Form.Select>
                                        <option>Select Position:</option>
                                        <option value="Cashier">Cashier</option>
                                        <option value="Chef">Chef</option>
                                        <option value="Waiter">Waiter</option>
                                        <option value="Janitor">Janitor</option>
                                    </Form.Select>
                                </Form.Group>
                                <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </Tab>
                </Tabs>
            </div>
            <button id='searchBackButton' className='fs-4 mt-5' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default SearchEmployees;