import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Pages Components
import AddEmployee from './pages/AddEmployee';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/add' element={<AddEmployee/>} />
          <Route path='/employees' element={<EmployeeList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
