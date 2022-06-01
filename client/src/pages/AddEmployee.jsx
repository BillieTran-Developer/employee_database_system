import './AddEmployee.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
    // Used for previous page
    const navigate = useNavigate();
    
    return(
        <div>
            <h3 className='mt-3 mb-4'>Add Employee</h3>
            <EmployeeForm/>
            <Button className='mt-3 btn-secondary' onClick={() => navigate(-1)}>Go Back</Button>
        </div>
    );
}

export default AddEmployee;