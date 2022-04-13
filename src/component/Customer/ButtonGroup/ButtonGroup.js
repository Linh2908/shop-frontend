import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import { connect } from 'react-redux';

import './ButtonGroup.scss';
import {addProductToCart}  from '../../../action/cartAction';

function ButtonGroup ({product,addProductToCart}) {
    const [isShow, setIsShow] = useState(false);

    const handleAddProductToCart = () => {
        addProductToCart(product);
        setIsShow(true);
    }
    return (
        <>
           <Button className='add-cart' onClick={() => handleAddProductToCart()}>Thêm vào giỏ hàng</Button>
           <div className='btn-wapper'>
               <Button>Mua trả góp lãi xuất 0%</Button>
               <Button>Mua trả góp qua thẻ</Button>
           </div>
           {
               isShow &&
            <Toast show={isShow} className='success-toast' delay={3000} autohide bg='success' onClose={() => setIsShow(false)}> 
                <Toast.Body >Thêm vào giỏ hàng thành công</Toast.Body>
           </Toast>
           }
        </>
    );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps,{addProductToCart})(ButtonGroup);
