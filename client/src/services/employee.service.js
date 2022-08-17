import Axios from 'axios';

class EmployeeDataService {
     // Add employee to MySQL database
    addEmployee = async (firstName, lastName, position, salary) => {
        // Employee object
        const employee = {
            firstName,
            lastName,
            position,
            salary
        }
        // MySQL connection
        try {
            await Axios.post(`http://localhost:3001/add`, employee);
        } catch(err) {
            console.log(err);
        }
    }

    // Get Employees
    getAll = async () => {
        try {
            // Get data from backend
            const response = await Axios.get(`http://localhost:3001/employees`);
            console.log(response)
            return { success: true, data: response.data}
        } catch(err) {
            console.log(err);
            return {success: false}
        }
    }

    // Single Get employee
    getEmployee = async (id) => {
        try {
            // Get data from backend
            const response = await Axios.get(`http://localhost:3001/edit/${id}`);
            return {success: true, data: response.data}
        } catch(err) {
            console.log(err);
            return {success: false}
        }
    }

    // Name Get employee
    getNameEmployee = async (firstName, lastName) => {
        try {
            console.log('123')
            // Get data from backend
            const response = await Axios.get(`http://localhost:3001/searchresults`,{
                params: {
                    first_name: `${firstName}`,
                    last_name: `${lastName}`
                }
            });
            console.log('getnameemployee')
            return { success: true, data: response.data}
        } catch(err) {
            console.log('hello')
            return {success: false}
        }
    }

    // Update employee
    updateEmployee = async (id, lastName, firstName, position, salary) => {
        //e.preventDefault();
        //Edited employee object
        const editedEmployee = {
            lastName,
            firstName,
            position,
            salary,
            id
        }
        //MySQL Connection
        try {
            await Axios.put(`http://localhost:3001/update`, editedEmployee);
        } catch(err) {
            console.log(err)
        }
        // Redirect back to employee list
        //navigate(`/employees`)
    }

    // Delete employee from database
    deleteEmployee = async (id) => {
        try {
            await Axios.delete(`http://localhost:3001/delete/${id}`);
            // Reset employee list after employee deletion
            console.log(`Employee: ${id} succesfully deleted`);
        } catch(err) {
            console.log(err);
        }
    }
}

export default new EmployeeDataService()