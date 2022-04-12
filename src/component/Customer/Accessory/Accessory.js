import React from 'react';
import { Container } from 'react-bootstrap';
import HotProducts from '../HotProduct/HotProducts';

function Accessory () {
    return (
        <Container className='my-3'>
            <HotProducts keyword={'accessory'}/>
        </Container>
    );
}

export default Accessory;
