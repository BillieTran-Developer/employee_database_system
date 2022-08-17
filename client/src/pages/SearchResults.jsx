import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EmployeeResult from '../components/EmployeeResult';
import EmployeeDataService from '../services/employee.service';

function SearchResults() {
    const [searchEmployeeList, setSearchEmployeeList] = useState('');
    const [listLoaded, setListLoaded] = useState(false);

    // Retrieve query 
    let search = useLocation().search;
    let params = new URLSearchParams(search);
    
    // Retrieve query params
    const firstName = params.get('first_name');
    const lastName = params.get('last_name');
    const position = params.get('position');

    useEffect (() => { 
        (async () => {
            // Set load state
            setListLoaded(false);
            // Initialize res object
            let res = {};
            // Set res object
            if(firstName && lastName) {
                res = await EmployeeDataService.getNameEmployee(firstName,lastName); 
            } else if(firstName) {
                res = await EmployeeDataService.getNameEmployee(firstName);
            } else if(lastName) {
                res = await EmployeeDataService.getNameEmployee('',lastName);
            } else if(position) {
                console.log('position')
                res = await EmployeeDataService.getNameEmployee('','', position);
                console.log('position: after')
                console.log(res);
            }
            // When retrieving data is successful
            if (res.success) {
                setSearchEmployeeList(res.data);
                setListLoaded(true);
            }
        })();
    }, []);

    // Delete employee and rerender employeeList 
    const deleteEmployee = (id) => {
        EmployeeDataService.deleteEmployee(id);
        setSearchEmployeeList(searchEmployeeList.filter(employee => {
          return employee.id !== id;
        }))
      }

    return(
        <div>
            {(firstName || lastName) && <p className='h2'>Search Result for Employee Named: {`${firstName} ${lastName}`}</p>}
            { listLoaded && <EmployeeResult employeeList={searchEmployeeList} delete={deleteEmployee}/> }
        </div>
    );
}

export default SearchResults;