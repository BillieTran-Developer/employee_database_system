import './SearchByPosition.css';
import { Form, Button } from 'react-bootstrap';

function SearchByPosition() {
    return(
         <Form id='searchPositionForm' className='mt-5'>
            <Form.Group controlID='position'>
                <Form.Select>
                    <option>Select Position:</option>
                    <option value="Cashier">Cashier</option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                    <option value="Janitor">Janitor</option>
                </Form.Select>
            </Form.Group>
            <Button variant='outline-secondary fw-bold' type='submit' className='mt-4'>
                Search
            </Button>
        </Form>
    );
}

export default SearchByPosition;