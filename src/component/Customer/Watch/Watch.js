import React from 'react';
import { Container } from 'react-bootstrap';
import HotProducts from '../HotProduct/HotProducts';

function Watch () {
    return (
        <Container className='my-3'>
            <HotProducts keyword={'watch'}/>
        </Container>
    );
}

export default Watch;
