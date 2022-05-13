import './EmployeeList.css'
import {useEffect, useState} from 'react';
import Axios from 'axios';

function EmployeeList() {
    const [employeeList, setEmployeeList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    
    // Get employee list from database 
    const getEmployees = async () => {
        try {
            const response = await Axios.get(`http://localhost:3001/employees`);
            console.log(response.data);
            return { success: true, data: response.data}
        } catch(err) {
            console.log(err);
            return {success: false}
        }
    }

    useEffect(() => {
        (async () => {
          setListLoaded(false);
          let res = await getEmployees();
          if (res.success) {
            setEmployeeList(res.data.results);
            setListLoaded(true);
          }
        })();
      }, []);

    return(
        <div>
            Employee List
        </div>
    );
}

export default EmployeeList;