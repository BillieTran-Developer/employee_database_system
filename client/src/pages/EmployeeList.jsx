import './EmployeeList.css'
import {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EmployeeDataService from '../services/employee.service.js'; 
import EmployeeResult from '../components/EmployeeResult';
import Loading from '../components/layout/Loading';


function EmployeeList() {
    const [employeeList, setEmployeeList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    // Returns Current Year
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        (async () => {
          // Set load state
          setListLoaded(false);
          let res = await EmployeeDataService.getAll();
          // When retrieving data is successful
          if (res.success) {
            // Set employee list
            setEmployeeList(res.data);
            // Set load state
            setListLoaded(true);
          }
        })();
      }, []);
    
    // Delete employee and rerender employeeList 
    const deleteEmployee = (id) => {
      EmployeeDataService.deleteEmployee(id);
      setEmployeeList(employeeList.filter(employee => {
        return employee.id !== id;
      }))
    }
      
    return(
        <div>
            <h1>Employee Database</h1>
            <h3>{currentYear}</h3>
            <Link to={`/`}>
              <Button variant='outline-primary' className='m-3'>Home</Button>
            </Link>
            {/* Loading animation */}
            {
                !listLoaded && <Loading/>
            }
            {/* Employee list */}
            {
               listLoaded && <EmployeeResult employeeList={employeeList} deleteEmployee={deleteEmployee}/> 
            }
        </div>
    );
}

export default EmployeeList;