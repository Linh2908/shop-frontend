import React from 'react';
import { Container } from 'react-bootstrap';
import HotProducts from '../HotProduct/HotProducts';

function Laptop () {
    return (
        <Container className='my-3'>
            <HotProducts keyword={'laptop'}/>
        </Container>
    );
}

export default Laptop;
