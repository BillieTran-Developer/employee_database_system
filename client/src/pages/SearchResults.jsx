import './SearchResults.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
    const min = params.get('min');
    const max = params.get('max');

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
                res = await EmployeeDataService.getNameEmployee('','', position);
            } else if(min && max) {
                if(min < max) {
                    res = await EmployeeDataService.getNameEmployee('', '', '', min, max);
                }
            } else if(min) {
                res = await EmployeeDataService.getNameEmployee('', '', '', min);
            } else if(max) {
                res = await EmployeeDataService.getNameEmployee('', '', '', '', max);
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
        <div id='resultContainer' className='p-4'>
            <div className='resultText mb-5'>
                {(firstName || lastName) && <p className='h2 text-light'>Search Result for Employee Named: {`${firstName} ${lastName}`}</p>}
                {(position) && <p className='h2 text-light'>Search Result for {`${position}`}:</p>}
                {(min || max) && <p className='h2 text-light'>Search Result for Employee Salary Between: {`$${min} - $${max}`}</p>}
            </div>
            <div id='resultListContainer'>
                { listLoaded && <EmployeeResult employeeList={searchEmployeeList} delete={deleteEmployee}/> }
            </div>
            <Link to='/'>
                <button id='addBackButton' className='fs-4 mt-5'>Home</button>
            </Link>
        </div>
    );
}

export default SearchResults;