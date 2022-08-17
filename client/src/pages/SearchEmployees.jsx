import './SearchEmployees.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmployeeDataService from '../services/employee.service';
import { Row, Col, Button, Form, Tab, Tabs } from 'react-bootstrap';
// Search Tab Components
import SearchByName from '../components/SearchByName';
import SearchByPosition from '../components/SearchByPosition';
import SearchBySalary from '../components/SearchBySalary';

function SearchEmployees() {
    // Used for previous page
    const navigate = useNavigate();
    // Employee variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [salaryMin, setSalaryMin] = useState(0);
    const [salaryMax, setSalaryMax] = useState(0);
    
    return(
        <div id='searchContainer'>
            <div id='searchText'>
                <p className='fs-1 text-light fw-bold'>Search Employees</p>
            </div>
            <div id='searchFormContainer'>
                <Tabs defaultActiveKey='employeeName' justify>
                    <Tab eventKey='employeeName' title='Employee Name'>
                        <SearchByName/>
                    </Tab>
                    <Tab eventKey='employeeSalary' title='Employee Salary'>
                        <SearchBySalary/>
                    </Tab>
                    <Tab eventKey='employeePosition' title='Employee Position'>
                        <SearchByPosition/>
                    </Tab>
                </Tabs>
            </div>
            <button id='searchBackButton' className='fs-4 mt-5 text-light' onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default SearchEmployees;