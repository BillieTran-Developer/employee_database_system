import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// React Router 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Pages Components
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/employees' element={<EmployeeList/>}/>
          <Route path='/add' element={<AddEmployee/>} />
          <Route path='/edit/:employeeId' element={<EditEmployee/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
