import './SearchBySalary.css';
import { Row, Col, Form, Button } from 'react-bootstrap';

function SearchBySalary() {
    return(
        <Form id='searchSalaryForm' className='mt-5'>
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
                            <Form.Control type="number" placeholder='Min'/>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} controlID='salaryMax'>
                        <div className='input-group mb-3'>
                            <span class="input-group-text">$</span>
                            <Form.Control type="number" placeholder='Max'/>
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