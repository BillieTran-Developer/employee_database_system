import './Home.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';

function Home() {
    return(
        <div id='mainContainer' className='d-flex align-items-center justify-content-center vh-100'>
            <div>
                <ParticleBackground/>
                <div>
                    <p className='fs-1 mb-3 text-light fw-bold'>Employee Database</p> 
                </div>
                <div id='optionContainer'>
                    <div className='btn-group-vertical gap-5'>
                        <Link to={`/add`}>
                            <Button id='addButton' className='btn-lg btn-block fill'>Add Employee</Button>
                        </Link>
                        <Link to={`/search`}>
                            <Button id='searchButton' className='btn-lg btn-block fill'>Search Employees</Button>
                        </Link>
                        <Link to={`/employees`}>
                            <Button id='listButton' className='btn-lg btn-block fill'>Employee List</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;