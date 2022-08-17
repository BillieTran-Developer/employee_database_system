import './EditEmployee.css';
import EmployeeDataService from '../services/employee.service';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
        <div id='editFormContainer' className='d-flex align-items-center justify-content-center vh-100'>
            <div>
                <h3 className='mt-3 mb-4 h1 text-light'>Edit Employee</h3>
                {
                    employee && <EditEmployeeForm employee={employee}/>
                }
                <button id='editBackButton' className='fs-4 mt-5' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default EditEmployee;