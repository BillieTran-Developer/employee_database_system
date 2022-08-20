import './SearchByPosition.css';
import { useState } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function SearchByPosition() {
    const [position, setPosition] = useState('');
    // Query params
    const params = {position: position}
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
         <Form id='searchPositionForm' onSubmit={handleSubmit} className='mt-5'>
            <Form.Group controlID='position'>
                <Form.Select id='position' onChange={e => setPosition(e.target.value)}>
                    <option value="none" selected disabled hidden>Select Position:</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Janitor">Janitor</option>
                </Form.Select>
            </Form.Group>
            <Button variant='outline-secondary fw-bold' type='submit' className='mt-5'>
                Search
            </Button>
        </Form>
    );
}

export default SearchByPosition;