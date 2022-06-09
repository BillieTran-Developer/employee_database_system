import './AddEmployee.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EditEmployeeForm from "../components/EditEmployeeForm";

function EditEmployee() {
    const[employee, setEmployee] = useState();
    const [employeeLoaded, setEmployeeLoaded] = useState(false);
    // Used for previous page
    const navigate = useNavigate();

    const params = useParams();
    
    // Get employee
    const getEmployee = async () => {
        // Retreive employeId param from URL
        const employeeId = params.employeeId;
        try {
            // Get data from backend
            const response = await Axios.get(`http://localhost:3001/edit/${employeeId}`);
            return {success: true, data: response.data}
        } catch(err) {
            console.log(err);
            return {success: false}
        }
    }

    useEffect(() => {
        (async () => {
            // Set load state
            setEmployeeLoaded(false);
            // Get employee
            let res = await getEmployee();
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