import './SearchBySalary.css';
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';

function SearchBySalary() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    // Query params
    const params = {min: min, max: max}
    // Used to navigate to result page
    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if(min < max) {
            // Query path
            navigate({
               pathname: '/searchresults',
               search: `?${createSearchParams(params)}`
           });
        }
    }

    return(
        <Form id='searchSalaryForm' onSubmit={handleSubmit} className='mt-5'>
            <div className='mb-5'>
                <label for="salaryRange" class="form-label">Salary Min:</label>
                <input type="range" class="form-range" id="salaryRange" min='0'></input>
                <label for="salaryRange" class="form-label">Salary Max:</label>
                <input type="range" class="form-range" id="salaryRange" min='0'></input>
            </div>
            <Row>
                <Form.Group as={Col} controlID='salaryMin'>
                        <div className='input-group mb-3'>
                            <span class="input-group-text">$</span>
                            <Form.Control type="number" value={min} onChange={e => setMin(e.target.value)} placeholder='Min'/>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} controlID='salaryMax'>
                        <div className='input-group mb-3'>
                            <span class="input-group-text">$</span>
                            <Form.Control type="number" value={max} onChange={e => setMax(e.target.value)} placeholder='Max'/>
                        </div>
                </Form.Group>
            </Row>
            <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                Search
            </Button>
        </Form>
    );
}

export default SearchBySalary;