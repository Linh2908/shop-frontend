import React from 'react';

import './ShippingAddress.scss';

function ShippingAddress ({form}) {

    return (
        <div className='shipping-address'>
            <div>Địa chỉ : {form.address}</div>
            <div>Tỉnh/thành phố : {form.city}</div>
            <div>Quốc gia : {form.country}</div>
        </div>
    );
}

export default ShippingAddress;
