import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Home() {
    return(
        <div id='optionContainer'>            
            <div className="d-grid gap-2 col-3 mx-auto">
                <Link to={`/add`}>
                    <Button variant='secondary'>Add Employee</Button>
                </Link>
                <Link to={`/search`}>
                    <Button variant='secondary'>Search Employees</Button>
                </Link>
                <Link to={`/employees`}>
                    <Button variant='secondary'>Employee List</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;