import './EmployeeList.css'
import {useEffect, useState} from 'react';
import Axios from 'axios';
import EmployeeResult from '../components/EmployeeResult';
import Loading from '../components/layout/Loading';


function EmployeeList() {
    const [employeeList, setEmployeeList] = useState([]);
    const [listLoaded, setListLoaded] = useState(false);
    // Returns Current Year
    const currentYear = new Date().getFullYear();

    // Get employee list from database 
    const getEmployees = async () => {
        try {
            // Get data from backend
            const response = await Axios.get(`http://localhost:3001/employees`);
            return { success: true, data: response.data}
        } catch(err) {
            console.log(err);
            return {success: false}
        }
    }

    useEffect(() => {
        (async () => {
          // Set load state
          setListLoaded(false);
          let res = await getEmployees();
          // When retrieving data is successful
          if (res.success) {
            // Set employee list
            setEmployeeList(res.data);
            // Set load state
            setListLoaded(true);
          }
        })();
      }, []);

    return(
        <div>
            
            <h1>Employee Database</h1>
            <h3>{currentYear}</h3>
            {/* Loading animation */}
            {
                !listLoaded && <Loading/>
            }
            {/* Employee list */}
            {
               listLoaded && <EmployeeResult employeeList={employeeList}/> 
            }
        </div>
    );
}

export default EmployeeList;