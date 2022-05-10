import {useState} from 'react';
import Axios from 'axios'
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState(0);

  const [employeeList, setEmployeeList] = useState([])

  const addEmployee = () => {
    const employee = {
      firstName,
      lastName,
      position,
      salary
    }
    Axios.post(`http://localhost:3001/add`, employee)
      .then(() => {
      setEmployeeList([...employeeList, employee])
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div className="App">
        <div className='information'>
          <label>
            <span>First Name:</span>
            <input type="text" onChange={(e) => setFirstName(e.target.value)}/> 
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" onChange={(e) => setLastName(e.target.value)}/>
          </label>
          <label>
            <span>Position:</span>
            <input type="text" onChange={(e) => setPosition(e.target.value)}/>
          </label>
          <label>
            <span>Salary:</span>
            <input type="numer" onChange={(e) => setSalary(e.target.value)}/>
          </label>
          <button onClick={addEmployee}>
            Add Employee
          </button>
      </div>
    </div>
  );
}

export default App;
