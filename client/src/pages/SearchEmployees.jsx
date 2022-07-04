import './SearchEmployees.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SearchEmployees() {
    return(
        <div>
            <Link to={`/`}>
                <Button>Home</Button>
            </Link>
        </div>
    )
}

export default SearchEmployees;