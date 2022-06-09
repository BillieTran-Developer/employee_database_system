import './AddEmployee.css';
import EmployeeDataService from '../services/employee.service';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EditEmployeeForm from "../components/EditEmployeeForm";

function EditEmployee() {
    const[employee, setEmployee] = useState();
    const [employeeLoaded, setEmployeeLoaded] = useState(false);
    // Used for previous page
    const navigate = useNavigate();
    // Use for retrieving params
    const params = useParams();

    useEffect(() => {
        // Employee id from params
        const id = params.employeeId;
        (async () => {
            // Set load state
            setEmployeeLoaded(false);
            // Get employee
            let res = await EmployeeDataService.getEmployee(id);
            // When retrieving data is successful
            if(res.success) {
                // Set employee
                setEmployee(res.data);
                // Set load state
                setEmployeeLoaded(true);
            }
        })();
    }, []);
    
    return(
        <div>
            <h3 className='mt-3 mb-4'>Edit Employee</h3>
            {
                employee && <EditEmployeeForm employee={employee}/>
            }
            <Button className='mt-3 btn-secondary' onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    );
}

export default EditEmployee;