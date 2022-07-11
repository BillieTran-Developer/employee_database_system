import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';

function Home() {
    return(
        <div id='mainContainer' className='d-flex align-items-center justify-content-center vh-100'>
            <div>
                <ParticleBackground/>
                <div id='optionContainer'>
                    <p className='fs-2 text-white mb-5'>Employee Database</p> 
                    <div className='btn-group-vertical gap-4 col-sm-6'>
                        <Link to={`/add`}>
                            <Button variant='outline-danger' className='btn-lg btn-block'>Add Employee</Button>
                        </Link>
                        <Link to={`/search`}>
                            <Button variant='outline-warning' className='btn-lg btn-block'>Search Employees</Button>
                        </Link>
                        <Link to={`/employees`}>
                            <Button variant='outline-info' className='btn-lg btn-block'>Employee List</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;