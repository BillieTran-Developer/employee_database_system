import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
    // Used for previous page
    const navigate = useNavigate();
    
    return(
        <div id='addFormContainer' className='form d-flex align-items-center justify-content-center vh-100'>
            <div>
                <h3 className='mt-3 mb-4 h1 text-light'>Add Employee</h3>
                <EmployeeForm/>
                <button id='addBackButton' className='fs-4 mt-5' onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default AddEmployee;