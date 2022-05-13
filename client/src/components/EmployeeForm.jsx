import './EmployeeForm.css';
import {useState} from 'react';
import Axios from 'axios';

function EmployeeForm() {
    // Employee variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState(0);

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
    }

    return(
        <div>
            <h3>Add Employee</h3>
            <form onSubmit={addEmployee}>
                <label>
                    <span>First Name:</span>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)}/> 
                </label>
                <label>
                    <span>Last Name:</span>
                    <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                </label>
                <label>
                    <span>Position:</span>
                    <input type="text" onChange={(e) => setPosition(e.target.value)}/>
                </label>
                <label>
                    <span>Salary:</span>
                    <input type="number" onChange={(e) => setSalary(e.target.value)}/>
                </label>
                <button>
                    Add Employee
                </button>
            </form>
        </div>
    );
}

export default EmployeeForm;