import './SearchBySalary.css';
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';

function SearchBySalary() {
    const [min, setMin] = useState();
    const [max, setMax] = useState();
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
            <Row>
                <Form.Group as={Col} controlID='salaryMin'>
                    <div id='salaryMin' className='input-group'>
                        <span class="input-group-text">$</span>
                        <Form.Control type="number" value={min} onChange={e => setMin(e.target.value)} placeholder='Min'/>
                    </div>
                </Form.Group>
                <Form.Group as={Col} controlID='salaryMax'>
                    <div id='salaryMax' className='input-group'>
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