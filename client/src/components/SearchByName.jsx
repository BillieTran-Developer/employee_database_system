import './SearchByName.css';
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

function SearchByName() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // Query params
    const params = {first_name: firstName, last_name: lastName}
    // Used to navigate to result page
    const navigate = useNavigate();

    // Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Query path
        navigate({
            pathname: '/searchresults',
            search: `?${createSearchParams(params)}`
        });
    }

    return(
        <Form id='searchNameForm' onSubmit={handleSubmit} className='mt-5'>
            <Row className='mb-3'>
                <Form.Group as={Col} controlID='firstName'>
                    <Form.Control id='firstName' type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlID='lastName'>
                    <Form.Control id='lastName' type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                </Form.Group>
            </Row>
            <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                Search
            </Button>
        </Form>
    );
}

export default SearchByName;