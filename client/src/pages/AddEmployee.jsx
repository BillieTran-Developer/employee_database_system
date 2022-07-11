import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
    // Used for previous page
    const navigate = useNavigate();
    
    return(
        <div>
            <div id='employeeContainer'>
                <h3 className='mt-3 mb-4 h1'>Add Employee</h3>
                <EmployeeForm/>
                <button className='retroButton mt-5' onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
    );
}

export default AddEmployee;